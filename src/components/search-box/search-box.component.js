import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="row search-center">
  <input placeholder={placeholder} onChange={handleChange} />
  </div>
);
