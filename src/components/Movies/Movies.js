import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ isMoviesShort, setIsMoviesShort,filterShortMovies, handleSearchByQuery, downloadedMovies,
  savedMovies, checkIsMovieSaved, handleSaveMovie, handleDeleteMovie, handleMarkedMovie, isPreloaderShowing, setIsPreloaderShowing }) {
  let location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFirstRequest, setIsFirstRequest] = React.useState(true);
  const [findedMovies, setFindedMovies] = React.useState([]);

  const handleMoviesSearch = useCallback(() => {
    if (searchQuery.length > 0) {
        setFindedMovies(handleSearchByQuery(downloadedMovies, searchQuery));
        setIsFirstRequest(false);
        localStorage.setItem("lastQuery", searchQuery);
    }

    setTimeout(() => setIsPreloaderShowing(false), 1000);
  }, [downloadedMovies, handleSearchByQuery, searchQuery, setIsPreloaderShowing]);

  useEffect(() => {
    handleMoviesSearch();
  }, [handleMoviesSearch]);

  const getLastCheckboxStatus = useCallback(() => {
    const lastCheckboxStatus = localStorage.getItem("isShortStatus");
    if (lastCheckboxStatus && lastCheckboxStatus === "true") {
      return true;
    } else {
      return false;
    }
  }, []);

  const showMoviesFromLastSearch = useCallback(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery && isFirstRequest) {
      const longMovies = handleSearchByQuery(downloadedMovies, lastQuery);
      const shortMovies = filterShortMovies(longMovies);
      if (getLastCheckboxStatus()) {
        setFindedMovies(shortMovies);
        setIsMoviesShort(true);
      } else {
        setFindedMovies(longMovies);
        setIsMoviesShort(false);
      }
    }
  }, [downloadedMovies, filterShortMovies, getLastCheckboxStatus, handleSearchByQuery, isFirstRequest, setIsMoviesShort]);

  useEffect(() => {
    showMoviesFromLastSearch();
  }, [showMoviesFromLastSearch]);

  return (
    <main>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMoviesShort={isMoviesShort}
        setIsMoviesShort={setIsMoviesShort}
        setIsPreloaderShowing={setIsPreloaderShowing}
      />
      <MoviesCardList
        isMoviesShort={isMoviesShort}
        filterShortMovies={filterShortMovies}
        findedMovies={findedMovies}
        savedMovies={savedMovies}
        checkIsMovieSaved={checkIsMovieSaved}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        handleMarkedMovie={handleMarkedMovie}
        isPreloaderShowing={isPreloaderShowing}
        setIsPreloaderShowing={setIsPreloaderShowing}
        locationPathname={location.pathname}
      />
    </main>
  )
}

export default Movies;
