import React from 'react'
import { MyAutocompleteTag } from '@willchui/my-autocomplete-tag'
import '@willchui/my-autocomplete-tag/dist/index.css'

const App = () => {
  const handleCallback = (tagsList, msg, item) =>{
    console.log(JSON.stringify(tagsList));
    console.log(msg);
    console.log(JSON.stringify(item));
  }
  const dropdownlist = [
    {title:'Toyota RAV4'},
    {title:'Toyota Camry'}, 
    {title:'Lexus - IS'},
    {title:'Lexus NX'},
    {title:'Lexus LC customtag', tagPrefix: 'myprefix'}, 
    {title:'Chevrolet Volt'},
    {title:'Chevrolet Bolt'},
    {title:'Hyundai Sonata'},
    {title:'Hyundai Tucson'}, 
    {title:'Ford Mustang'}, 
    {title:'Ford GT'}];

  const sample3 = {
    'enableDropdown': true, 
    'fromDropdownOnly': true,
    'dropdown': dropdownlist,
  };

  const sample4 = {
    'enableDropdown': true, 
    'fromDropdownOnly': false,
    'dropdown': dropdownlist,
  };  

  return(<>
    <div className="container">
      <label>Sample 1 (Default without Autocomplete): </label>
      <MyAutocompleteTag placeholder="Enter your favorite car 1" tagListChange={handleCallback}/>
      <hr />
      <label>Sample 2 (Custom tag css without Autocomplete): </label>
      <MyAutocompleteTag placeholder="Enter your favorite car 2" tagPrefix={"myprefix"} tagListChange={handleCallback}/>
      <hr />
      <label>Sample 3 (Create a tag from autocomplete dropdown only): </label>
      <MyAutocompleteTag placeholder="Type 'Toyota', 'Ford' etc..." tagListChange={handleCallback} autocompleteapi={sample3} duplicate={false}/>
      <hr />   
      <label>Sample 4 (Create a tag from autocomplete dropdown and input box): </label>
      <MyAutocompleteTag placeholder="Enter your favorite car 4" tagListChange={handleCallback} autocompleteapi={sample4} duplicate={true}/>
      <hr />            
    </div>
    </>)   
}

export default App
