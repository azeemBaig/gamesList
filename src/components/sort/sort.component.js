import React from "react";

import "./sort.styles.css";

export const Sort = ({onSelect}) => (
    <div>
       <span> Sort by : </span> 
    <select id="cars" onChange={onSelect} >
        <option disabled>Select</option>
    <option value="shtl">Score High to Low</option>
    <option value="slth">Score Low to High</option>
  </select>
  </div>
);
