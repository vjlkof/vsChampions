import React from 'react';

 function Card ({id,name,title,energy}) {
      return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 measure-narrow'>
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg?`}></img>
        <div>
          <h2 >{name}</h2>
          <p>{title}</p>
          <h2>{energy}%</h2>
        </div>
      </div>
    );
}

export default Card;
