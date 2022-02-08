import React from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormValidator from "../../hooks/formValidation"

function SearchForm({ setSearchQuery, isMoviesShort, setIsMoviesShort, setIsPreloaderShowing }) {
  const lastQuery = localStorage.getItem("lastQuery");
  const useFormValidation = useFormValidator();
  const { searchValue } = useFormValidation.values;
  const { errors, isFormValid, resetForm } = useFormValidation;
  const location = useLocation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function changeMoviesType(e) {
    setIsMoviesShort(!isMoviesShort);
    localStorage.setItem("isShortStatus", JSON.stringify(!isMoviesShort));
  }

  function searchFormHandler(evt) {
    evt.preventDefault();
    setSearchQuery(searchValue);
    setIsPreloaderShowing(true);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__wrapper">
          <div className="search-form__icon"/>
          <form className="search-form__field" onSubmit={searchFormHandler}>
            <input className="search-form__input" type="text" placeholder={(location.pathname === "/movies") ? lastQuery || "Фильм" : "Фильм"} name="searchValue" id="searchValue" value={searchValue || ''} onChange={useFormValidation.handleChange} required/>
            <button className={`search-form__button ${!isFormValid && "search-form__button_disabled"}`} type="submit" disabled={!isFormValid}></button>
          </form>
          <div className="search-form__checkbox-wrapper">
            <FilterCheckbox
              label="Короткометражки"
              isMoviesShort={isMoviesShort}
              setIsMoviesShort={setIsMoviesShort}
              changeMoviesType={changeMoviesType}
            />
          </div>
        </div>
        <p className="search-form__error">{errors.searchValue}</p>
      </div>
    </div>
  );
}

export default SearchForm;
