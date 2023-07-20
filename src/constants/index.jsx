export const BASE_URL = 'https://64addf9cb470006a5ec67639.mockapi.io';

export const API_URLS = {
  PRODUCTS: {
    url: `${BASE_URL}/products`,
    config: {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    },
  },

  CATEGORIES: {
    url: `${BASE_URL}/categories`,
    config: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
};
