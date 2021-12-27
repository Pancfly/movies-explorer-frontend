import React from 'react';

import Header from '../Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const setOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className='page'>
      <Header
        loggedIn={loggedIn}
        setOpenMenu={setOpenMenu}
      />
    </div>
  )
}