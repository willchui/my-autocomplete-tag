# @willchui/my-autocomplete-tag

> MyAutocompleteTag is a tagging componenet with autocomplete function.
* Create a tag from autocomplete dropdown or from input box directly.
* Tag css can be customized.

[![NPM](https://img.shields.io/npm/v/@willchui/my-autocomplete-tag.svg)](https://www.npmjs.com/package/@willchui/my-autocomplete-tag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @willchui/my-autocomplete-tag
```

## Usage

```jsx
import React from 'react'
import { MyAutocompleteTag } from '@willchui/my-autocomplete-tag'
import '@willchui/my-autocomplete-tag/dist/index.css'

const App = () => {
  const handleCallback = (tagsList) =>{
    console.log(JSON.stringify(tagsList));
  }

  const sample = {
    'enableDropdown': true, 
    'fromDropdownOnly': true,
    'dropdown': [
    {title:'Toyota RAV4'},
    {title:'Toyota Camry'}, 
    {title:'Lexus - IS'},
    {title:'Lexus NX'},
    {title:'Lexus LC customtag', tagPrefix: 'custom_tag_css_classname'}, 
    {title:'Chevrolet Volt'},
    {title:'Chevrolet Bolt'},
    {title:'Hyundai Sonata'},
    {title:'Hyundai Tucson'}, 
    {title:'Ford Mustang'}, 
    {title:'Ford GT'}]
  };

  return(<>
    <div className="container">
      <label>Sample (Create a tag from autocomplete dropdown only): </label>
      <MyAutocompleteTag placeholder="Enter your favorite car" tagListChange={handleCallback} autocompleteapi={sample}/>
      <hr />   
    </div>
    </>)   
}
```
## API Prop 

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>placeholder</td>
      <td><div>string</div></td>
      <td>Empty String</td>
      <td>
      <div><p>The describes the expected value of an input field.</p></div></td>
    </tr>
    <tr>
      <td >autocompleteapi</td>
      <td><div>object</div></td>
      <td></td>
      <td><div><p>The structure looks like:<br><pre>
{
    'enableDropdown': true, /** enable/disable the autocomplete function*/
    'fromDropdownOnly': true, /** Create a tag from dropdown only */    
    'dropdown': [
      {title:'Lexus NX'},
      {title:'Lexus LC customtag', tagPrefix: 'custom_tag_css_classname'}, 
      {title:'Ford GT'}]
      /** dropdown array for autocomplete, title is require, and tagPrefix is optional. */
    }
      </p></div></td>
      </pre>
    </tr>    
    <tr>
      <td >tagListChange </td>
      <td ><div>function</div></td>
      <td></td>
      <td><div ><p>Callback function when a tag is created or deleted, it will return an array of tag list.</p></div></td>
    </tr>
   

    
</tbody></table>

## MyBootstrapTable Demo

Quick Demo in <a href="https://stackblitz.com/edit/react-mybootstrap-table-demo?file=src%2FApp.js">Stackblitz MyAutocompleteTag</a>.

## License

MIT © [willchui](https://github.com/willchui)
