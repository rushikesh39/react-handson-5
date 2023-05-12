// import React, { useState } from 'react';
import HigherOComponent from './HigherOComponet';

function Hover(props) {
  

  return (
    <div>
      <p>You over the button {props.value} times</p>
      <button onMouseOver={props.submit}>Hover me</button>
    </div>
  );
}

export default HigherOComponent(Hover);
