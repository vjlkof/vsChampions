import React from 'react';
import Card from './Card.js';

function CardList ({champs}) {
    return (
    <div>
      {
        champs.map((item,i)=>{
          return(
            <Card 
              key={champs[i].key}
              id={champs[i].id}
              name={champs[i].name}
              title={champs[i].title}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;
