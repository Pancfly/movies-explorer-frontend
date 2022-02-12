import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { DESKTOP_WIDTH, MOBILE_WIDTH, AMOUNT_CARDS_FOR_DESKTOP, SHOWMORE_WIDTH,
  AMOUNT_CARDS_FOR_PAD, AMOUNT_CARDS_FOR_MOBILE, AMOUNT_CARDS_FOR_DESKTOP_SHOWMORE,
  AMOUNT_CARDS_FOR_MOBILE_SHOWMORE, HERE_WILL_BE_YOUR_SAVED_MOVIES, HERE_WILL_BE_YOUR_MOVIES,
  SHORT_MOVIES_NOT_FOUND, NO_MOVIES_WITH_LAST_QUERY } from "../../utils/constants"

function MoviesCardList({ locationPathname, searchQuery, isMoviesShort, filterShortMovies, findedMovies,
  savedMovies, handleSaveMovie, handleDeleteMovie, checkIsMovieSaved, handleMarkedMovie, isPreloaderShowing,
  setIsPreloaderShowing }) {

  const location = useLocation();
  const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(0);
  const [renderMovies, setRenderMovies] = useState([]);
  const [moviesErrorMessage, setMoviesErrorMessage] = useState("");

  const numberOfInitialCards = () => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      setNumberOfCardsToShow(AMOUNT_CARDS_FOR_DESKTOP);
    } else if (window.innerWidth >= MOBILE_WIDTH) {
      setNumberOfCardsToShow(AMOUNT_CARDS_FOR_PAD);
    } else {
      setNumberOfCardsToShow(AMOUNT_CARDS_FOR_MOBILE);
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
    if (window.innerWidth >= SHOWMORE_WIDTH) {
      setNumberOfCardsToShow(numberOfCardsToShow + AMOUNT_CARDS_FOR_DESKTOP_SHOWMORE);
      if(numberOfCardsToShow > renderMovies.length) {
        let nonExistentCards = numberOfCardsToShow - renderMovies.length;
        setNumberOfCardsToShow(numberOfCardsToShow - nonExistentCards);
      }
    } else {
      setNumberOfCardsToShow(numberOfCardsToShow + AMOUNT_CARDS_FOR_MOBILE_SHOWMORE);
      if(numberOfCardsToShow > renderMovies.length) {
        let nonExistentCards = numberOfCardsToShow - renderMovies.length;
        setNumberOfCardsToShow(numberOfCardsToShow - nonExistentCards);
      }
    }
  }

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (location.pathname === "/saved-movies" && renderMovies.length === 0) {
        setMoviesErrorMessage(HERE_WILL_BE_YOUR_SAVED_MOVIES);
    } else if (!lastQuery && renderMovies.length === 0) {
        setMoviesErrorMessage(HERE_WILL_BE_YOUR_MOVIES);
    } else if (lastQuery && isMoviesShort && renderMovies.length === 0) {
        setMoviesErrorMessage(SHORT_MOVIES_NOT_FOUND);
    } else if (lastQuery && renderMovies.length === 0) {
        setMoviesErrorMessage(NO_MOVIES_WITH_LAST_QUERY);
    } else {
        setMoviesErrorMessage(" ");
    }
  }, [isMoviesShort, location.pathname, moviesErrorMessage, renderMovies.length, searchQuery, setMoviesErrorMessage]);

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
