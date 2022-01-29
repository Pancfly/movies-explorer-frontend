import React from "react";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

function MoviesCard({ data, locationPathname }) {
  const [isMarked, setIsMarked] = React.useState(data.isMarked);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
  };

  return (
    <article id={data.id} className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__title">
            {data.title}
          </h2>
          <p className="movies-card__subtitle">
            {data.subtitle}
          </p>
        </div>
        <FavoritesButton
          className="movies-card__favorite-button"
          onClick={handleMarkMovieCard}
          locationPathname={locationPathname}
          isMarked={isMarked}
        />
      </div>
      <div className="movies-card__image-section">
        <img className="movies-card__image" alt={data.imageAlt} src={data.imageSrc}/>
      </div>
    </article>
  )
}

export default MoviesCard;
