import React from 'react'

import { MyAutocompleteTag } from '@willchui/my-autocomplete-tag'
import '@willchui/my-autocomplete-tag/dist/index.css'

const App = () => {
  const autoCompleteApi = {
    'enable': true, 
    'dropdown': ['Toyota - RAV4', 'Toyota - Camry', 
      'Lexus - IS' ,'Lexus - NX' , 'Lexus - LC', 
      'Chevrolet - Volt', 'Chevrolet - Bolt',
      'Hyundai - Sonata', 'Hyundai - Tucson', 
      'Ford - Mustang', 'Ford - GT']}
  return(<>
    <MyAutocompleteTag placeholder="Car" autocompleteapi={autoCompleteApi} />
    </>)   
}

export default App
