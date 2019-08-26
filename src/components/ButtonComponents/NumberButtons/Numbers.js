import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

//import any components needed

//Import your array data to from the provided data file


  // STEP 2 - add the imported data to state

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       const Numbers = ({ setDisplay, display }) => {

        const [setNumbers] = useState(numbers);
      
        return (
          <div className="numbers-container">
            { setNumbers.map((num, index) => { 
              return index !== 9 
              ?
              <NumberButton key={ index } symbol={ num } setDisplay={ setDisplay } display={ display } /> 
              : 
              <NumberButton key={ index } symbol={ num } name='zero-button' 
              setDisplay={ setDisplay } display={ display } /> 
            })}
          </div>
        );
      };
      
      export default Numbers;
