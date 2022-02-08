import React from "react";

function FilterCheckbox({ label, isMoviesShort, changeMoviesType }) {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__default" type="checkbox" name="short" id="short" onClick={changeMoviesType}/>
      <span className="filter-checkbox__slider" />
      <span className="filter-checkbox__label">{label}</span>
    </label>
  );
}

export default FilterCheckbox;
