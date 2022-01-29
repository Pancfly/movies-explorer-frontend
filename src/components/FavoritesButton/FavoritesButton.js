import React, { Children } from "react";

import { ReactComponent as AddFavoritesButtonIcon } from "../../images/favoritebutton/add.svg";
import { ReactComponent as AddFavoritesButtonIconMarked } from "../../images/favoritebutton/marked.svg";
import { ReactComponent as RemoveFavoritesButtonIcon } from "../../images/favoritebutton/remove.svg";

function FavoritesButton({ className, onClick, locationPathname, isMarked }) {
  return (
    <button className={className} onClick={onClick}>
      {locationPathname === "/saved-movies" ? (
        <RemoveFavoritesButtonIcon />
      )
      :
      locationPathname === "/movies" && isMarked ? (
        <AddFavoritesButtonIconMarked />
      ) : (
        <AddFavoritesButtonIcon />
      )}
    </button>
  )
}

export default FavoritesButton;
