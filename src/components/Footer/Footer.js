import React from "react";
import { useRouteMatch } from "react-router-dom";

function Footer() {
  const isMain = useRouteMatch({ path: "/", exact: true });
  const isMovies = useRouteMatch({ path: "/movies" });
  const isSavedMovies = useRouteMatch({ path: "/saved-movies" });
  const footerEnabled = isMain || isMovies || isSavedMovies;

  return (
    <footer className={`footer ${footerEnabled ? "footer_enabled" : ""}`}>
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__info-container">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="footer__nav-bar">
            <li className="footer__nav-item">
              <a href="https://praktikum.yandex.ru/profile/web/" target="_blank" rel="noreferrer" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://github.com/Pancfly" target="_blank" rel="noreferrer" className="footer__link">
                Github
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
