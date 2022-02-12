import { useCallback, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { EXIST_FOOTER_FOR_PAGE, SERVER_IMAGE_URL, SHORT_DURATION, YOU_SUCCESS_REGISTER,
  NEW_CURRENTUSER_DATA_SUCCESS } from "../../utils/constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies//Movies"
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isSuccessMessageShowing, setIsSuccessMessageShowing] = useState(false);
  const [isPreloaderShowing, setIsPreloaderShowing] = useState(false);
  const [downloadedMovies, setDownloadedMovies] = useState([]);
  const [isMoviesShort, setIsMoviesShort] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isResponseSuccessful, setIsResponseSuccessful] = useState();
  const [infoTooltipMessage, setInfoTooltipMessage] = useState("");

  const history = useHistory();
  const location = useLocation();

  function handleRegister({ email, password, name }) {
    clearInfoTooltip();
    setIsPreloaderShowing(true);
    mainApi.register({ email: email.toLowerCase(), password, name })
      .then(() => {
        setIsResponseSuccessful(true);
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage(YOU_SUCCESS_REGISTER);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        setIsInfoTooltipOpen(true);
        console.log(err);
      })
      .finally(() => {
        setIsSuccessMessageShowing(true);
        setIsPreloaderShowing(false);
      })
  }

  function handleLogin({ email, password }) {
    setIsPreloaderShowing(true);
    mainApi.authorize({ email, password })
      .then(() => {
        setIsLogedIn(true);
        getCurrentUser();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderShowing(false);
      })
  }

  function handleLogout() {
    setIsPreloaderShowing(true);
    mainApi.logout()
      .then(() => {
        setIsLogedIn(false);
          history.push("/");
          localStorage.clear();
        })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderShowing(false);
      })
  }

  function handleUpdateUser({ name, email }) {
    clearInfoTooltip();
    setIsPreloaderShowing(true);
    mainApi.updateCurrentUser({ name, email })
      .then(() => {
        setCurrentUser({ name, email });
        setIsInfoTooltipOpen(true);
        setInfoTooltipMessage(NEW_CURRENTUSER_DATA_SUCCESS);
        setIsResponseSuccessful(true);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setIsResponseSuccessful(false);
        console.log(err);
      })
      .finally(() => {
        setIsSuccessMessageShowing(true);
        setIsPreloaderShowing(false);
      })
  }

  function getCurrentUser() {
    mainApi.getCurrentUser()
      .then((res) => {
        const { name, email, _id } = res;
        setCurrentUser({ name, email, _id });
        setIsLogedIn(true);
        (location.pathname === "/signin" || location.pathname === "/signup") ? history.push("/movies") : history.push(location.pathname);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const isMoviesDownloaded = useCallback(() => {
    const localMovies = localStorage.getItem("localMovies");
    if (localMovies) {
      setDownloadedMovies(JSON.parse(localMovies));
    } else {
      handleGetMovies();
    }
  }, []);

  function handleGetMovies() {
    moviesApi.getMovies()
      .then((moviesList) => {
        const formattedMovies = moviesList.map((movie) => {
          return {
            country : movie.country,
            director : movie.director,
            duration : movie.duration,
            year : movie.year,
            description : movie.description,
            image: SERVER_IMAGE_URL + movie.image.url,
            trailer: movie.trailerLink,
            thumbnail: SERVER_IMAGE_URL + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU : movie.nameRU,
            nameEN : movie.nameEN,
          }
        });
        localStorage.setItem("localMovies", JSON.stringify(formattedMovies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        const localMovies = localStorage.getItem("localMovies");
        setDownloadedMovies(JSON.parse(localMovies));
      })
  }

  function handleSearchByQuery(data, searchQuery) {
    const searchResult = data.filter((movie) => {
      return movie.nameRU.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
    });
    if (!isMoviesShort) {
      return searchResult;
    } else {
      return filterShortMovies(searchResult);
    }
  }

  function filterShortMovies(movies) {
    return movies.filter((movie) => {
      return movie.duration <= SHORT_DURATION;
    });
  }

  function handleGetSavedMovies() {
    setIsPreloaderShowing(true);
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.slice().reverse().filter((item) => item.owner === currentUser._id));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderShowing(false);
      })
  }

  function handleSaveMovie(movie) {
    mainApi.setSavedMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);

      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
    mainApi.deleteSavedMovie(savedMovie)
      .then(() => {
        const tempSavedMovies = savedMovies.filter((item) => item._id !== savedMovie._id);
        setSavedMovies(tempSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function checkIsMovieSaved(movie) {
    const isSaved = savedMovies.some((item) => (item.movieId === movie.movieId));
    return isSaved;
  };

  function handleMarkedMovie(movie) {
    const isSaved = checkIsMovieSaved(movie);
    if (!isSaved) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  };

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  function clearInfoTooltip() {
    setInfoTooltipMessage("");
    setIsResponseSuccessful();
  }

  useEffect(() => {
    if (isLogedIn) {
      handleGetSavedMovies();
      isMoviesDownloaded();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogedIn]);

  useEffect(() => {
    getCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header place="landing" isLogedIn={isLogedIn} />
            <Main />
          </Route>
          <ProtectedRoute path="/movies" isLogedIn={isLogedIn}>
            <Header place="movies" isLogedIn={isLogedIn}/>
            <Movies
              handleSearchByQuery={handleSearchByQuery}
              downloadedMovies={downloadedMovies}
              isMoviesShort={isMoviesShort}
              setIsMoviesShort={setIsMoviesShort}
              filterShortMovies={filterShortMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              handleMarkedMovie={handleMarkedMovie}
              savedMovies={savedMovies}
              checkIsMovieSaved={checkIsMovieSaved}
              isPreloaderShowing={isPreloaderShowing}
              setIsPreloaderShowing={setIsPreloaderShowing}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" isLogedIn={isLogedIn}>
            <Header place="saved-movies" isLogedIn={isLogedIn}/>
            <SavedMovies
              handleSearchByQuery={handleSearchByQuery}
              downloadedMovies={downloadedMovies}
              isMoviesShort={isMoviesShort}
              setIsMoviesShort={setIsMoviesShort}
              filterShortMovies={filterShortMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              handleMarkedMovie={handleMarkedMovie}
              savedMovies={savedMovies}
              checkIsMovieSaved={checkIsMovieSaved}
              isPreloaderShowing={isPreloaderShowing}
              setIsPreloaderShowing={setIsPreloaderShowing}
            />
          </ProtectedRoute>
          <ProtectedRoute path="/profile" isLogedIn={isLogedIn}>
            <Header place="profile" isLogedIn={isLogedIn}/>
            <Profile
              onLogout={handleLogout}
              onUpdate={handleUpdateUser}
              isSuccessMessageShowing={isSuccessMessageShowing}
              setIsSuccessMessageShowing={setIsSuccessMessageShowing}
            />
          </ProtectedRoute>
          <Route path="/signup">
            <Register
              onSubmit={handleRegister}
              isPreloaderShowing={isPreloaderShowing}
            />
          </Route>
          <Route path="/signin">
            <Login
              onSubmit={handleLogin}
              isPreloaderShowing={isPreloaderShowing}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {useRouteMatch(EXIST_FOOTER_FOR_PAGE) ? null : (
          <Footer />
        )}
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          isSuccessful={isResponseSuccessful}
          onClose={closeInfoTooltip}
          message={infoTooltipMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
