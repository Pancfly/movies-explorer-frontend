import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ place, isLogedIn }) {
    return (
        <header className={`header header_place_${place}`}>
            <Navigation place={place} isLogedIn={isLogedIn}/>
        </header>
    );
}

export default Header;
