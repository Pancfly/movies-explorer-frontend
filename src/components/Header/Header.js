import React from 'react';

import Navigation from '../Navigation/Navigation';

import Logo from '../Logo/Logo';

import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header className="header">
      <Logo />
      {props.loggedIn && (<Navigation />)}
      {props.loggedIn && (<MenuButton onOpenMenu={props.onOpenMenu} />)}
    </header>
  )
}

export default Header;
