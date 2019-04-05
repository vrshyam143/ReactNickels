import React from 'react';
import Filler from '../Filler/Filler';
import './PercentageBar.css';

const PercentageBar = ( props ) => { 
  return (
    <div className='progress-bar'>
      <Filler percentage={props.percentage > 100 ? 100 : props.percentage }/>
    </div>
  )
}

export default PercentageBar;