import React from 'react';

const MenuButton = React.memo((props) => {
  return (
    <button className="menu-button" onClick={props.onOpenMenu}/>
  )
});

export default MenuButton;
