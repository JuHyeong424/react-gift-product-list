export const BASE_URL = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
  THEMES: '/themes',
  RANKING: '/products/ranking',
  LOGIN: '/login',
}

export const THEME_URL = `${BASE_URL}${ENDPOINTS.THEMES}`;

export const RANKING_URL = `${BASE_URL}${ENDPOINTS.RANKING}`;

export const LOGIN_URL = `${BASE_URL}${ENDPOINTS.LOGIN}`;
