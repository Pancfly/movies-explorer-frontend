import React from "react";
import useFormValidator from "../../hooks/formValidation";
import { regex } from "../../utils/constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ onLogout, onUpdate, setIsSuccessMessageShowing }) {
  const useFormValidation = useFormValidator();
  const { values, errors, isFormValid, resetForm, setValues } = useFormValidation;
  const currentUser = React.useContext(CurrentUserContext);
  const { name = currentUser.name, email = currentUser.email } = useFormValidation.values;

  React.useEffect(() => {
    setValues(currentUser);
    resetForm();
  }, [currentUser, resetForm, setValues]);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    onUpdate({ name, email });
  }

  function formStatus() {
    let inputCheckExchange = (values.name === currentUser.name) && (values.email === currentUser.email);
    return (!inputCheckExchange && isFormValid);
  }

  let disabledStatus = formStatus();

  function handleChange(evt) {
    useFormValidation.handleChange(evt);
    setIsSuccessMessageShowing(false);
  }

  return (
    <form className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}</h2>
      <div className="profile__input-container">
        <label className="profile__label" htmlFor="profileName">
          Имя
        </label>
        <input className="profile__input" id="profileName" type="text" name="name" pattern={regex.name} value={values.name || currentUser.name} minLength="2" maxLength="30" disabled="" onChange={handleChange} required/>
        <span className="profile__span-input-error">
          {errors.name}
        </span>
      </div>
      <div className="profile__input-container">
        <label className="profile__label" htmlFor="profileEmail">
          E-mail
        </label>
        <input className="profile__input" id="profileEmail" type="email" name="email" pattern={regex.email} value={values.email || currentUser.email} disabled="" onChange={handleChange} required/>
        <span className="profile__span-input-error">
          {errors.email}
        </span>
      </div>
      <button className="profile__button" type="submit" disabled={!disabledStatus} onClick={handleSubmitForm}>
        Редактировать
      </button>
      <button className="profile__button profile__button_exit" type="button" onClick={onLogout}>
        Выйти из аккаунта
      </button>
    </form>
  );
}

export default Profile;
