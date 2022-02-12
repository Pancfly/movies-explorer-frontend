import React from "react";

function InfoTooltip({ isOpen, isSuccessful, onClose, message }) {
  function handleClose() {
    onClose();
  }

  return (
    <div className={`popup ${isOpen ? "popup_is-opening" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__form">
        <button className="popup__close-button" type="button" onClick={handleClose}/>
        <div className={`popup__big-icon ${isSuccessful ? "popup__big-icon_type_success" : "popup__big-icon_type_fail"}`}></div>
        <h2 className="popup__bold-text">
          {isSuccessful ? message : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
