import React from "react";

function ShowMoreButton({ onClick }) {
  return (
    <div className="show-more">
      <button className="show-more__button" onClick={onClick}>
        Ещё
      </button>
    </div>
  )
}

export default ShowMoreButton;
