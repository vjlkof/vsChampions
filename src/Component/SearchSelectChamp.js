import React from 'react';
import Select from 'react-select';


function SearchSelectChamp ({champs, searchChange, message,ready1, ready2}) {
  console.log("Data de champs");
  console.log(champs);
  let fighting = false;
  if (ready1 && ready2){
    fighting = true
  }
  console.log("data fighting:" + fighting)
  return (
    <div>
      <h3>{message}</h3>
      <Select
        placeholder={message}
        isSearchable={true}
        isDisabled={fighting}
        onChange={searchChange}
        getOptionLabel={(option) => option.id}
        options={champs}
      />
    </div>
  )
}

export default SearchSelectChamp;