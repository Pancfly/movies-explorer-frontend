export const regex = {
  name: "^[a-zA-Zа-яА-ЯЁё\\s\\-]+$",
  email: "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})",
  url: "/^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g",
};

export const existFooterForPage = [
  "/signin",
  "/signup",
  "/profile",
];

export const serverImageUrl = "https://api.nomoreparties.co";
