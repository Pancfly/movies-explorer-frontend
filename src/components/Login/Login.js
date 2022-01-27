import React from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/movies");
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
    >
      <label className="auth-form__label" htmlFor="email">
        E-mail
      </label>
      <input className="auth-form__input" type="email" id="email" placeholder="email@yandex.ru" required/>
      <label className="auth-form__label" htmlFor="password">
        Пароль
      </label>
      <input className="auth-form__input" type="password" id="password" minLength="5" maxLength="22" placeholder="введите пароль" required/>
    </AuthForm>
  );
}

export default Register;
