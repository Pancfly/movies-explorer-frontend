import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../../images/header/logo_circle.svg';

const Logo = React.memo(() => {
  return (
      <Link
        className="logo"
        to='/'
      >
        <LogoImage />
      </Link>
  )
});

export default Logo;
