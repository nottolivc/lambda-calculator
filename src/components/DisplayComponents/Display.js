import React from "react";

/* Display any props data here */
const Display = ({ total }) => {
  return <div className="display">
  <div className='displayDigit'>{ total }</div>
  </div>;
};

export default Display;

