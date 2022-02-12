export const regex = {
  name: "^[a-zA-Zа-яА-ЯЁё\\s\\-]+$",
  email: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
  // eslint-disable-next-line no-useless-escape
  url: "/^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g",
};

export const EXIST_FOOTER_FOR_PAGE = [
  "/signin",
  "/signup",
  "/profile",
];

export const SHORT_DURATION = 40;
export const NEW_CURRENTUSER_DATA_SUCCESS = "Новые данные профиля сохранены";
export const YOU_SUCCESS_REGISTER = "Вы успешно зарегистрировались!";

export const DESKTOP_WIDTH = 1024;
export const MOBILE_WIDTH = 768;
export const SHOWMORE_WIDTH = 1050;
export const AMOUNT_CARDS_FOR_DESKTOP = 12;
export const AMOUNT_CARDS_FOR_PAD = 8;
export const AMOUNT_CARDS_FOR_MOBILE = 5;
export const AMOUNT_CARDS_FOR_DESKTOP_SHOWMORE = 3;
export const AMOUNT_CARDS_FOR_MOBILE_SHOWMORE = 2;
export const HERE_WILL_BE_YOUR_SAVED_MOVIES = "Здесь появятся ваши сохраненные фильмы.";
export const HERE_WILL_BE_YOUR_MOVIES = "Здесь появятся ваши фильмы.";
export const SHORT_MOVIES_NOT_FOUND = "Короткометражных фильмов по запросу не найдено.";
export const NO_MOVIES_WITH_LAST_QUERY = "По последнему запросу ничего не найдено.";

export const SERVER_IMAGE_URL = "https://api.nomoreparties.co";
