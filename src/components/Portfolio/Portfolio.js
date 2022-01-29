import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Pancfly/how-to-learn">
          Статичный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Pancfly/russian-travel">
          Адаптивный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://github.com/Pancfly/react-mesto-api-full">
          Одностраничное приложение
          <p className="portfolio__list-element">↗</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
