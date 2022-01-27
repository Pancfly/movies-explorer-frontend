import React from 'react';

function NavTab() {

  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a className="navtab__list-link" href="#about-project">О проекте</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__list-link" href="#technologies">Технологии</a>
        </li>
        <li className="navtab__list-item">
          <a className="navtab__list-link" href="#student">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;
