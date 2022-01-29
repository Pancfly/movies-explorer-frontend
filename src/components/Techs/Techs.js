import React from "react";
import Title from "../Title/Title";

function Techs() {
  return (
    <section className="techs" id="technologies">
      <Title title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-element">HTML</li>
        <li className="techs__list-element">CSS</li>
        <li className="techs__list-element">JS</li>
        <li className="techs__list-element">React</li>
        <li className="techs__list-element">Git</li>
        <li className="techs__list-element">Express.js</li>
        <li className="techs__list-element">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
