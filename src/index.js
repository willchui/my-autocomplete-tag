/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Fragment , useRef, useReducer} from 'react'
import styles from './styles.module.css'

export const MyAutocompleteTag = (props) => {
  const [inputText, setInputText] = useState();
  const [dropDownList, setDropDownList] = useState([]);

  /** const [tagList, setTagList] = useState([]); */
 
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentFocus, setcurrentFocus] = useState(-1);
  const inputBox = useRef(null);
  const [tagList, dispatchTag] = useReducer((results, itemPick) =>{
    let newList = [];
    switch(itemPick.type) {
      case 'add': {
       newList = [...results, {
          title: itemPick.title, 
          prefix: itemPick.prefix
        }];
        setInputText("");
        setShowDropdown(false); 
        if(props.tagListChange)
          props.tagListChange(newList);
        return newList;
      }
      case 'remove': {
        newList = results.filter((_, index) => index !== itemPick.index);     
        if(props.tagListChange)
          props.tagListChange(newList);
        return newList;
      }
      default:
         return results;
    }    
  }, []);
 

  const handleInputKeyUp = (e) => {
    let pf = styles.mytag;
    if (props.autocompleteapi && props.autocompleteapi.enableDropdown) {      
      const value = e.target.value.toString().toUpperCase().trim();
      const list = props.autocompleteapi.dropdown.filter(
        (item) => item.title.toString().toUpperCase().indexOf(value) > -1
      )
      setShowDropdown((value.length > 0))
      setDropDownList([...list]);

      if(list.length === 1 && props.autocompleteapi.fromDropdownOnly) {
        setcurrentFocus(0);
      }

      if ((e.key === 'Enter' || e.keyCode === 13) ) {
         if(currentFocus >= 0 ) {      
            if(list[currentFocus].tagPrefix)
              pf = list[currentFocus].tagPrefix;
            else if(props.tagPrefix) {
              pf = props.tagPrefix;
            }
            dispatchTag({type:'add', title: list[currentFocus].title, prefix: pf}) 
         }
         else if(!props.autocompleteapi.fromDropdownOnly) {
          if(props.tagPrefix) {
            pf = props.tagPrefix;
          }
          if(e.target.value.toString().trim() !== '') {
            dispatchTag({type:'add', title: e.target.value.toString(), prefix: pf}) 
          }
         }
      }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.keyCode === 40 || e.keyCode === 38) {
        let cf = currentFocus;
        const max = dropDownList.length;
        
        if(e.keyCode === 40||e.key === 'ArrowDown') {
          cf++;
        }
        else if(e.keyCode === 38 ||e.key === 'ArrowUp') {
          cf--;  
        }
        if(cf === max)
           cf = 0;
      
        if( cf < 0)
           cf = max-1;

        setcurrentFocus(cf);
      }
    }
    else {
      if ((e.key === 'Enter' || e.keyCode === 13) && (e.target.value.toString().trim() !== '')) {
          if(props.tagPrefix)
             pf = props.tagPrefix;
          dispatchTag({type:'add', title: e.target.value, prefix: pf});

      }
    }
  }

  const handleInputChange = (e) => {
    setcurrentFocus(-1);
    setInputText(e.target.value);
  }

  const handleFocus = (e) =>{
    inputBox.current.focus();
  }

  useEffect(() => {    
    document.addEventListener("click", (e)=>{setShowDropdown(false)});
    return () => {
       document.removeEventListener("click", (e)=>{setShowDropdown(false)});
    }
  }, [])

  return (
    <React.Fragment>
      <div className={styles.autocomplete} onClick={handleFocus}>
        {
          tagList.map((item, index)=>(
            <label className={item.prefix} key={index}>{item.title}<span data-value={index} onClick={()=>dispatchTag({type: 'remove', index})} className={styles.close}>&times;</span></label>
          ))
        }
        <div className={styles.inputarea}  style={{position: 'relative'}}>
          <input type='text' placeholder={props.placeholder} ref={inputBox} onKeyUp={handleInputKeyUp} onChange={handleInputChange} value={inputText} />
          {showDropdown?<div className={styles.autocompleteitems}>
            {dropDownList.map((item, index) => (
              <div key={index} 
                   className={`${currentFocus===index?styles.autocompleteactive:''}`}
                   onClick={()=>{dispatchTag({type: 'add', title: item.title,
                   prefix: `${item.tagPrefix?item.tagPrefix:(props.tagPrefix?props.tagPrefix:styles.mytag)}`})}}
                   >{item.title}</div>
            ))}
          </div>:''
          }
        </div>
      </div>
    </React.Fragment>
  )
}
