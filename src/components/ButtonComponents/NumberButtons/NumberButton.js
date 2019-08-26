import React from "react";


{/* Display a button element rendering the data being passed down from the parent container on props */}



const NumberButton = ({ name, symbol, setDisplay, display}) => {
  const buttonValue = `number-button ${ name }`;

  const handleClick = () => {
    return setDisplay(display + symbol);
  }

  return (
    <div className={ buttonValue } onClick={() => handleClick()}>
      { symbol }
    </div>
  );
};

export default NumberButton;