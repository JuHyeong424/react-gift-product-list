const BASE_URL = import.meta.env.VITE_BASE_URL;

const ENDPOINTS = {
  THEMES: '/themes',
  RANKING: '/products/ranking',
}

export const THEME_URL = `${BASE_URL}${ENDPOINTS.THEMES}`;

export const RANKING_URL = `${BASE_URL}${ENDPOINTS.RANKING}`;
