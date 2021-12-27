import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../images/header/account-icon.svg'

const Navigation = React.memo(() => {

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <div className="navigation__links-container">
          <li className="navigation__list-item">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              to='/movies'
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              to='/saved-movies'
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </div>
        <li className="navigation__list-item">
          <NavLink
            className='navigation__account-link'
            to='/profile'
          >
            Аккаунт
            <AccountIcon
              className="navigation__account-icon"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
})

export default Navigation;
