class MoviesApi {
  constructor (options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Внимание! Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    })
    .then((res) => this._getResponse(res));
  };
};

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
