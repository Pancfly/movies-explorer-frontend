import React from "react";
import PromoImage from "../../images/main/main_logo.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img alt="фоновая картинка" className="promo__image" src={PromoImage}/>
    </section>
  )
}

export default Promo;
