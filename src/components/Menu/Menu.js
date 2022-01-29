import React from "react";
import { Link } from "react-router-dom";

function MenuButton( {isOpened, onMobileMenuClose, place} ) {
  const handleMobileMenuClose = () => onMobileMenuClose();

  return (
    <div className={`menu ${isOpened ? "menu_opened" : ""}`}>
      <div className={`menu__container ${isOpened ? "menu__container_opened" : ""}`}>
        <button className="menu__close-button" onClick={handleMobileMenuClose}/>
        <nav className="menu__navigation">
          <ul className="menu__list">
            <li className="menu__list-element">
              <Link className="menu__link" to="/" onClick={handleMobileMenuClose}>
                Главная
              </Link>
            </li>
            <li className="menu__list-element">
              <Link className={`menu__link ${place === "movies" ? "menu__link_active" : ""}`} to="/movies" onClick={handleMobileMenuClose}>
                Фильмы
              </Link>
            </li>
            <li className="menu__list-element">
              <Link className={`menu__link ${place === "saved-movies" ? "menu__link_active" : ""}`} to="/saved-movies" onClick={handleMobileMenuClose}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link className="navigation__profile-edit navigation__profile-edit_place_menu" to="/profile" onClick={handleMobileMenuClose}>
            <p className="navigation__profile-text">Аккаунт</p>
            <div className="navigation__profile-icon-wrapper">
              <div className="navigation__profile-icon"/>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuButton;
