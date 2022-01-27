import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({place}) {
    return (
        <header className={`header header_place_${place}`}>
            <Navigation place={place}/>
        </header>
    );
}

export default Header;
