import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit }) {
  const [error, setError] = React.useState();
  const [inputValue, setInputValue] = React.useState();

  function handleChange(e) {
    clearError();
    setInputValue(e.target.value);
  }

  function handleSearch(e) {
    clearError();
    e.preventDefault();

    if (!inputValue) {
      setError("Нужно ввести ключевое слово");
    } else if (inputValue.length < 3) {
      setError("Введите не менее трёх букв");
    } else {
      onSubmit(inputValue);
    }
  }

  function clearError() {
    setError(null);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__wrapper">
          <div className="search-form__icon"/>
          <form className="search-form__field">
            <input className="search-form__input" type="text" placeholder="Фильм" onFocus={clearError} value={inputValue || ""} onChange={handleChange}/>
            <button className="search-form__button" type="submit" onClick={handleSearch}></button>
          </form>
          <div className="search-form__checkbox-wrapper">
            <FilterCheckbox label="Короткометражки" />
          </div>
        </div>
        {error && <p className="search-form__error">{error}</p>}
      </div>
    </div>
  );
}

export default SearchForm;
