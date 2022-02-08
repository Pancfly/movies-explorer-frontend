import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import convertDuration from "../../utils/convertDuration";

function MoviesCard({ movie, savedMovies, checkIsMovieSaved, handleSaveMovie, handleDeleteMovie, handleMarkedMovie, locationPathname }) {
  const [isMarked, setIsMarked] = useState(false);

  const isMovieSaved = checkIsMovieSaved(movie);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
    handleMarkedMovie(movie);
  };

  useEffect(() => {
    if (isMovieSaved) {
      setIsMarked(true);
    } else {
      setIsMarked(false);
    }
  }, [isMovieSaved]);

  return (
    <Switch>
      <Route path="/movies">
        <li className="movies-card">
          <div className="movies-card__container">
            <div className="movies-card__text-container">
              <h2 className="movies-card__title">
                {movie.nameRU}
              </h2>
              <p className="movies-card__subtitle">
                {convertDuration(movie.duration)}
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
            <a href={movie.trailer}>
              <img className="movies-card__image" alt={movie.NameRU} src={movie.image}/>
            </a>
          </div>
        </li>
      </Route>
      <Route path="/saved-movies">
        <li className="movies-card">
          <div className="movies-card__container">
            <div className="movies-card__text-container">
              <h2 className="movies-card__title">
                {movie.nameRU}
              </h2>
              <p className="movies-card__subtitle">
                {convertDuration(movie.duration)}
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
            <a href={movie.trailer}>
              <img className="movies-card__image" alt={movie.NameRU} src={movie.image}/>
            </a>
          </div>
        </li>
      </Route>
    </Switch>
  )
}

export default MoviesCard;
