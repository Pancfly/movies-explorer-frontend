import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import useFormValidator from "../../hooks/formValidation";
import { regex } from "../../utils/constants";

function Register({ onSubmit, isPreloaderShowing }) {
  const useFormValidation = useFormValidator();
  const { name, email, password } = useFormValidation.values;
  const { values, errors, isFormValid, resetForm } = useFormValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, email, password });
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkPath="/signin"
      linkText="Войти"
      isFormValid={isFormValid}
      isPreloaderShowing={isPreloaderShowing}
    >
      <label className="auth-form__label" htmlFor="name">
        Имя
      </label>
      <input className={`auth-form__input ${errors.name ? "auth-form__input_type_error" : ""}`} name="name" type="text" id="name" minLength="2" maxLength="30" pattern={regex.name} placeholder="введите имя" value={values.name || ""} onChange={useFormValidation.handleChange} required/>
      <span className="auth-form__span-input-error">
        {errors.name}
      </span>
      <label className="auth-form__label" htmlFor="email">
        E-mail
      </label>
      <input className={`auth-form__input ${errors.email ? "auth-form__input_type_error" : ""}`} name="email" type="email" id="email" pattern={regex.email} placeholder="email@yandex.ru" value={values.email || ""} onChange={useFormValidation.handleChange} required/>
      <span className="auth-form__span-input-error">
        {errors.email}
      </span>
      <label className="auth-form__label" htmlFor="password">
        Пароль
      </label>
      <input className={`auth-form__input ${errors.password ? "auth-form__input_type_error" : ""}`} name="password" type="password" id="password" minLength="5" maxLength="22" placeholder="введите пароль" value={values.password || ""} onChange={useFormValidation.handleChange} required/>
      <span className="auth-form__span-input-error">
        {errors.password}
      </span>
    </AuthForm>
  );
}

export default Register;
