import React from 'react';
import s from './Button.module.css';

function Button({
  name,
    width = '328px',
    type = 'button',
    fontSize = '18px',
  fontWeight = '800',
    active=false,
 
}) {
  return (
    <div>
      <button
        type={type}
        className={active? s.buttonActive:s.button}
        style={{  width: `${width}`, fontSize:`${fontSize}`, fontWeight:`${fontWeight}`}}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;