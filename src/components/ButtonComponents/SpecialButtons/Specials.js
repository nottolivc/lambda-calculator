import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";

//import any components needed

//Import your array data to from the provided data file


  // STEP 2 - add the imported data to state

      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

const Specials = ({ setDisplay, display }) => {
const [setSpecials] = useState(specials)
      
        return (
          <div className='specials-container'>
             {setSpecials.map((special, index) => {
               return <SpecialButton key={ index } symbol={ special } setDisplay={ setDisplay } display={ display }/>
             })}
          </div>
        );
      };
      
      export default Specials;