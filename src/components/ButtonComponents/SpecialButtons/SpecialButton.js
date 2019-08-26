import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */
const SpecialButton = ({ symbol, setDisplay, display }) => {
  
  function handleSpecialButton() {
    if (symbol === 'C') {
      setDisplay('');
    } else if (symbol === '%') {
      setDisplay(display / 100);
    } else if (symbol === '+/-'){
      setDisplay(display * -1);
    }
  }

  return (
    <div className='special-button' onClick={() => handleSpecialButton() }>{ symbol }</div>
  );
};

export default SpecialButton;