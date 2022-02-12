class MainApi {
  constructor (option) {
    this._baseUrl = option.baseUrl;
    this._headers = option.headers;
  }

  _getResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Внимание! Ошибка: ${res.status}`)
  }

  register({ name, password, email }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        password,
        email,
      })
    })
    .then((res) => this._getResponse(res));
  }

  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then((res) => this._getResponse(res));
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._getResponse(res));
  }

  updateCurrentUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
    .then((res) => this._getResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._getResponse(res));
  }

  setSavedMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then((res) => this._getResponse(res));
  }

  deleteSavedMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._getResponse(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    })
    .then((res) => this._getResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.pancfly.movies.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
