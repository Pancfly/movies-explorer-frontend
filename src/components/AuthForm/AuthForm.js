import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/authform/logo.svg";

function AuthForm({ children, title, buttonText, text, linkText, linkPath, onSubmit, loginPage }) {
  return (
    <div className="auth-form">
      <Link to="/" className="auth-form__logo-link">
        <img src={logo} alt="логотип" className="auth-form__logo-image" />
      </Link>
      <form className="auth-form__form" noValidate onSubmit={onSubmit}>
        <div className="auth-form__wrapper">
          <h2 className="auth-form__title">{title}</h2>
          {children}
        </div>
        <div className="auth-form__wrapper">
          <button className={`auth-form__button ${loginPage ? "auth-form__button_login" : ""}`} type="submit">
            {buttonText}
          </button>
          <p className="auth-form__text">
            {`${text} `}
            <Link className="auth-form__link" to={linkPath}>
              {linkText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
