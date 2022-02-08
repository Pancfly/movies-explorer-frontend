import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import useFormValidator from "../../hooks/formValidation";
import { regex } from "../../utils/constants";

function Register({ onSubmit, isPreloaderShowing }) {
  const useFormValidation = useFormValidator();
  const { email, password } = useFormValidation.values;
  const { values, errors, isFormValid, resetForm } = useFormValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      linkPath="/signup"
      linkText="Регистрация"
      loginPage="true"
      isFormValid={isFormValid}
      isPreloaderShowing={isPreloaderShowing}
    >
      <label className="auth-form__label" htmlFor="email">
        E-mail
      </label>
      <input className={`auth-form__input ${errors.email ? "auth-form__input_type_error" : ""}`} type="email" name="email" id="email" placeholder="email@yandex.ru" pattern={regex.email} value={values.email || ""} onChange={useFormValidation.handleChange} required/>
      <span className="auth-form__span-input-error">
        {errors.email}
      </span>
      <label className="auth-form__label" htmlFor="password">
        Пароль
      </label>
      <input className={`auth-form__input ${errors.password ? "auth-form__input_type_error" : ""}`} type="password" name="password" id="password" minLength="5" maxLength="22" placeholder="введите пароль" value={values.password || ""} onChange={useFormValidation.handleChange} required/>
      <span className="auth-form__span-input-error">
        {errors.password}
      </span>
    </AuthForm>
  );
}

export default Register;
