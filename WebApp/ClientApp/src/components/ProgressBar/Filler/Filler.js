import React from 'react';

const Filler = ( props ) => {

    let background;

    if ( props.percentage > 75 ) {
      background = 'red'
    } else if ( props.percentage > 60 ) {
      background = 'orange'
    } else {
      background = '#1da598'
    }
  
  return <div className='filler' style={{ width: `${props.percentage}%`, background: background }}/>
}

export default Filler;