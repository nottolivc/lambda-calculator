import React from "react";


{/* Display a button element rendering the data being passed down from the parent container on props */}


const OperatorButton = ({ setDisplay, value, symbol, display }) => {

  function handleOperator() {
    if (symbol === '+' || '-' || 'x' || '/' ) return setDisplay(display + value);
  }

  function handleCalculation() {
    if (value === '=') return setDisplay(eval(display));
  }

  return (
    <div className="operator-button" value={value} onClick={() => handleOperator() || handleCalculation()}>{ symbol }</div>
  );
};

export default OperatorButton;
