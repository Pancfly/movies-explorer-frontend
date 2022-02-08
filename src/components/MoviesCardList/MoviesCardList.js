import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function MoviesCardList({ locationPathname, searchQuery, isMoviesShort, filterShortMovies, findedMovies,
  savedMovies, handleSaveMovie, handleDeleteMovie, checkIsMovieSaved, handleMarkedMovie, isPreloaderShowing,
  setIsPreloaderShowing }) {
  const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(0);
  const [renderMovies, setRenderMovies] = useState([]);
  const [moviesErrorMessage, setMoviesErrorMessage] = useState("");

  const numberOfInitialCards = () => {
    if (window.innerWidth >= 1024) {
      setNumberOfCardsToShow(12);
    } else if (window.innerWidth >= 768) {
      setNumberOfCardsToShow(8);
    } else {
      setNumberOfCardsToShow(5);
    }
  };

  useEffect(() => {
    numberOfInitialCards();
    window.addEventListener("resize", () => {
      setTimeout(numberOfInitialCards, 1500);
    });

    return () => {
      window.removeEventListener("resize", numberOfInitialCards);
    };
  }, []);

  const setTypeOfMovies = useCallback(() => {
    (isMoviesShort) ? setRenderMovies(filterShortMovies(findedMovies)) : setRenderMovies(findedMovies);
  }, [filterShortMovies, findedMovies, isMoviesShort]);

  useEffect(() => {
    setTypeOfMovies();
  }, [setTypeOfMovies]);

 function handleClickMore() {
    if (window.innerWidth >= 1050) {
      setNumberOfCardsToShow(numberOfCardsToShow + 3);
    } else {
      setNumberOfCardsToShow(numberOfCardsToShow + 2);
    }
 }

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (locationPathname === "/saved-movies" && renderMovies.length === 0) {
        setMoviesErrorMessage("Здесь появятся ваши сохраненные фильмы.");
    } else if (!lastQuery && renderMovies.length === 0) {
        setMoviesErrorMessage("Здесь появятся ваши фильмы.");
    } else if (lastQuery && isMoviesShort && renderMovies.length === 0) {
        setMoviesErrorMessage("Короткометражных фильмов по запросу не найдено.");
    } else if (lastQuery && renderMovies.length === 0) {
        setMoviesErrorMessage("По последнему запросу ничего не найдено.");
    } else {
        setMoviesErrorMessage(" ");
    }
  }, [isMoviesShort, locationPathname, moviesErrorMessage, renderMovies.length, searchQuery, setMoviesErrorMessage]);

  return (
    <Switch>
      <Route path="/movies">
        <section className="movies">
          {isPreloaderShowing ? (<Preloader/>) : renderMovies && (
            <>
              <p className="movies__messages">
                {moviesErrorMessage}
              </p>
              <ul className="movies-card-list">
                {renderMovies.map((movie) => {
                  return (
                    <MoviesCard
                      key={movie.movieId}
                      movie={movie}
                      savedMovies={savedMovies}
                      checkIsMovieSaved={checkIsMovieSaved}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
                      handleMarkedMovie={handleMarkedMovie}
                      locationPathname={locationPathname}
                    />
                  )
                }).slice(0, numberOfCardsToShow)}
              </ul>
              {(renderMovies.length > numberOfCardsToShow) && (<ShowMoreButton onClick={handleClickMore}/>)}
            </>
          )}
        </section>
      </Route>
      <Route path="/saved-movies">
        <section className="saved-movies">
          {isPreloaderShowing ? (<Preloader/>) : renderMovies && (
            <>
              <p className="saved-movies__messages">
                {moviesErrorMessage}
              </p>
              <ul className="movies-card-list">
                {renderMovies.map((movie) => {
                  return (
                    <MoviesCard
                      key={movie.movieId}
                      movie={movie}
                      savedMovies={savedMovies}
                      checkIsMovieSaved={checkIsMovieSaved}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
                      handleMarkedMovie={handleMarkedMovie}
                      locationPathname={locationPathname}
                    />
                  )
                })}
              </ul>
            </>
          )}
        </section>
      </Route>
    </Switch>
  )
}

export default MoviesCardList;
