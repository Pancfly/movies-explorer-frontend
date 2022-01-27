import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Что-то пошло не так...";
      console.log("Имя пользователя обязательно");
    } else if (values.username.length < 2) {
      errors.username = "Что-то пошло не так...";
      console.log("Имя пользователя должно быть не менее 2 символов");
    } else if (values.username.length > 30) {
      errors.username = "Что-то пошло не так...";
      console.log("Имя пользователя должно быть не более 30 символов");
    }

    if (!values.email) {
      errors.email = "Что-то пошло не так...";
      console.log("Почта обязательное поле");
    } else if (!regex.test(values.email)) {
      errors.email = "Что-то пошло не так...";
      console.log("Невалидная почта");
    }

    if (!values.password) {
      errors.password = "Что-то пошло не так...";
      console.log("Пароль обязательный");
    } else if (values.password.length < 5) {
      errors.password = "Что-то пошло не так...";
      console.log("Пароль должен быть не менее 5 символов");
    } else if (values.password.length > 22) {
      errors.password = "Что-то пошло не так...";
      console.log("Пароль должен быть не более 22 символов");
    }

    return errors;
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkPath="/signin"
      linkText="Войти"
    >
      <label className="auth-form__label" htmlFor="username">
        Имя
      </label>
      <input className={`auth-form__input ${formErrors.username ? "auth-form__input_type_error" : ""}`} name="username" type="text" id="username" minLength="2" maxLength="30" placeholder="введите имя" value={formValues.username} onChange={handleChange}/>
      <label className="auth-form__label" htmlFor="email">
        E-mail
      </label>
      <input className={`auth-form__input ${formErrors.email ? "auth-form__input_type_error" : ""}`} name="email" type="email" id="email" placeholder="email@yandex.ru" value={formValues.email} onChange={handleChange} required/>
      <label className="auth-form__label" htmlFor="password">
        Пароль
      </label>
      <input className={`auth-form__input ${formErrors.password ? "auth-form__input_type_error" : ""}`} name="password" type="password" id="password" minLength="5" maxLength="22" placeholder="введите пароль" value={formValues.password} onChange={handleChange} required/>
      <span className="auth-form__span-input-error">
        {formErrors.username || formErrors.email || formErrors.password}
      </span>
    </AuthForm>
  );
}

export default Register;
