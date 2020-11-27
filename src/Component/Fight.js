import React from 'react';
import 'tachyons';


function Fight ({ready1, ready2,figthing}) {
  console.log('entro a figth')
  console.log(ready1)
  console.log(ready2)
  if (ready1 && ready2){
    return (    
    <div>
      <button className='b--white-40 br4-l br2 grow bw2-l bw1 white-80 pa4-l pa2 hover-bg-near-black bg-dark-red' disabled={false} onClick={figthing}>
        Fight
      </button>
    </div>
    )
  } else{
    return (
    <div>
      <button className='b--gray bg-gray br4-l br2 white-80 pa4-l pa2' disabled={true}>
        Fight
      </button>
    </div>
    )
  }
}

export default Fight;