import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";


function Navigation({ place, isLogedIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => setIsMobileMenuOpen(true);
  const onMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navigation">
      <Logo />
      <ul className={`navigation__films ${!isLogedIn ? "navigation__films_hidden" : ""}`}>
        <li className="navigation__films-element">
          <Link to="/movies" className={`navigation__link ${place === "movies" ? "navigation__link_active" : ""}`}>
            Фильмы
          </Link>
        </li>
        <li className="navigation__films-element">
          <Link to="/saved-movies" className={`navigation__link ${place === "saved-movies" ? "navigation__link_active" : ""}`}>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <div className={`navigation__login ${isLogedIn ? "navigation__login_hidden" : ""}`}>
        <Link to="/signup" className="navigation__login-element">
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="navigation__button navigation__login-element">Войти</button>
        </Link>
      </div>
      <Link to="/profile"
        className={`navigation__profile-edit navigation__profile-edit_place_header ${!isLogedIn
        ? "navigation__profile-edit_hidden"
        : ""}`}>
        <span className="navigation__profile-text">Аккаунт</span>
        <div className="navigation__profile-icon-wrapper">
          <div className="navigation__profile-icon"/>
        </div>
      </Link>
      <button className={`navigation__burger-button ${isMobileMenuOpen || !isLogedIn
        ? "navigation__burger-button_hidden"
        : ""}`} type="button" onClick={handleMobileMenuOpen}>
      </button>
      <Menu isOpened={isMobileMenuOpen} onMobileMenuClose={onMobileMenuClose} place={place} />
    </nav>
  );
}

export default Navigation;
