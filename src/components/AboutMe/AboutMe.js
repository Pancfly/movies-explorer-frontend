import React from "react";
import Title from "../Title/Title";
import Portret from "../../images/aboutme/portret.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <Title title="Студент" />
      <article className="about-me__container">
        <div className="about-me__container_direction_column">
          <h3 className="about-me__title">Алексей</h3>
          <p className="about-me__subtitle">Веб-разработчик, 24 года</p>
          <p className="about-me__text">
            Мне очень нравится Frontend-область, ты буквально рисуешь картину на белом холсте,
            и при этом у тебя есть с чего срисовывать, а после все оживает, элементы двигаются,
            текст подсвечивается...
          </p>
          <nav>
            <ul className="about-me__social-links-list">
              <li className="about-me__social-links-list-element">
                <a className="about-me__social-link" href="https://www.facebook.com/profile.php?id=100001626261744" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li className="about-me__social-links-list-element">
                <a className="about-me__social-link" href="https://github.com/Pancfly" target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img className="about-me__photo" src={Portret} alt="Моя фотография"/>
      </article>
    </section>
  );
}

export default AboutMe;
