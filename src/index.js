/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Fragment } from 'react'
import styles from './styles.module.css'

export const MyAutocompleteTag = (props) => {
  const [inputText, setInputText] = useState();
  const [dropDownLst, setDropDownLst] = useState([]);
  const [tagLst, setTagLst] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleKeyUp = (e) => {
    
    if (props.autocompleteapi.enable) {
      const value = e.target.value.toString().toUpperCase().trim();
      const lst = props.autocompleteapi.dropdown.filter(
        (item) => item.toString().toUpperCase().indexOf(value) > -1
      )
      setShowDropdown((value.length > 0))
      setDropDownLst([...lst]);

      if ((e.key === 'Enter' || e.keyCode === 13) && value === lst[0].toUpperCase().trim()) {
        setShowDropdown(false);
        addTag(e.target.value);
      }
    }
    else {
      if (e.key === 'Enter' || e.keyCode === 13) {
        addTag(e.target.value);
      }
    }

  }

  const addTag = (text) => {
    console.log("addTag=>" + text);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const hideDropDown = (e) =>{

      if(e.target.dataset.id === "myautocompletetagitem"){
        setInputText('');
        console.log(e.target.dataset.value);

      }
         
      setShowDropdown(false);
    }    
    document.addEventListener("mouseup", hideDropDown);
    return () => {
       document.removeEventListener("mouseup", hideDropDown);
    }
  }, [])

  return (
    <React.Fragment>
      <div className={styles.autocomplete}>
        <input type='text' name='myCountry' placeholder={props.placeholder} onKeyUp={handleKeyUp} onChange={handleChange} value={inputText}></input>
        {showDropdown?<div className={styles.autocompleteitems}>
          {dropDownLst.map((item, index) => (
            <div key={index} data-id="myautocompletetagitem" data-value={item}>{item}</div>
          ))}
        </div>:''
        }
      </div>
    </React.Fragment>
  )
}
