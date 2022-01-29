import React from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import MovieCardImage from "../../images/movies/cardimage.svg";

function Movies() {
  let location = useLocation();
  const [isLoadingData, setIsLoadingData] = React.useState(true);

  const movies_card_list_data = [
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
      id: 3,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: true,
    },
    {
      id: 4,
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
      isMarked: true,
      isShortFilm: false,
    },
    {
      id: 6,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: false,
    },
    {
      id: 7,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 8,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 9,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 10,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: true,
      isShortFilm: true,
    },
    {
      id: 11,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
    {
      id: 12,
      title: "33 слова о дизайне",
      subtitle: "1ч 47м",
      imageAlt: "кадр из фильма",
      imageSrc: MovieCardImage,
      isMarked: false,
      isShortFilm: true,
    },
  ];

  React.useEffect(() => {
    const loadingDataTimeout = setTimeout(() => {
      setIsLoadingData(false);
    }, 1500);

    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, [])

  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}/>
      {isLoadingData ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList
            data={movies_card_list_data}
            locationPathname={location.pathname}
          />
          <ShowMoreButton onClick={() => console.log("Показать еще")}/>
        </>
      )}
    </main>
  )
}

export default Movies;
