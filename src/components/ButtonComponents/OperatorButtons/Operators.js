import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton";

//import any components needed

//Import your array data to from the provided data file


  // STEP 2 - add the imported data to state

      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

const Operators = ({ setDisplay, display }) => {

  const [setOperators] = useState(operators)

  return (
    <div className='operators-container'>
       {setOperators.map((operator, index) => {
          return <OperatorButton key={ index } symbol={ operator.char } value={ operator.value } setDisplay={setDisplay} display={display} />
       })}
    </div>
  );
};

export default Operators;
