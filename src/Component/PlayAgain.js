import React from 'react';
import 'tachyons';


function PlayAgain ({restart}) {
  return (    
  <div>
    <button className='b--white-40 br4 grow bw2 white-80 pa4 hover-bg-near-black bg-dark-red' disabled={false} onClick={restart}>
      PlayAgain
    </button>
  </div>
    )
  }

export default PlayAgain;