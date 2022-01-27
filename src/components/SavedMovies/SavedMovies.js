import React from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieCardImage from "../../images/movies/cardimage.svg";

function SavedMovies() {

  let location = useLocation();

  const MOVIES_CARD_LIST_DATA = [
    {
      id: 1,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 2,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
    {
      id: 5,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: false,
    },
  ];

  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}/>
      <MoviesCardList
        data={MOVIES_CARD_LIST_DATA}
        locationPathname={location.pathname}
      />
    </main>
  )
}

export default SavedMovies;
