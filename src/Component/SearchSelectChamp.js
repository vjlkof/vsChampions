import React from 'react';
import Select from 'react-select';


function SearchSelectChamp ({champs, searchChange, message}) {
  console.log("Data de champs")
  console.log(champs)
  return (
    <div>
      <h3>{message}</h3>
      <Select
        placeholder={message}
        isSearchable={true}
        onChange={searchChange}
        getOptionLabel={(option) => option.id}
        options={champs}
      />
    </div>
  )
}

export default SearchSelectChamp;