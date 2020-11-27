import React, { Children } from 'react';
import 'tachyons';

function Scroll (props) {
  return (
    <div className='vh-75' style={{overflowY: 'scroll', border: '1px solid black'}}>
      { props.children }
    </div>
  );
}

export default Scroll;
