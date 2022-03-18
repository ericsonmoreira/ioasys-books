import axios from 'axios';
import constants from '../constants';
import { postRefreshToken } from '../services/postRefreshToken';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem(constants.LH_TOKEN_NAME) as string;

  if (token) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`.replaceAll('"', '');
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response, // não faz nada com status que esteja dentro de 2xx
  async (error) => {
    const status = error.response.status;

    if (status === 401) {
      try {
        const refreshToken = localStorage.getItem(
          constants.LH_REFRESH_TOKEN_NAME
        )?.replaceAll('"', '');

        const { newToken, newRefreshToken } = await postRefreshToken({
          refreshToken,
        });

        // Atualizando as tokens
        localStorage.setItem(constants.LH_TOKEN_NAME, newToken);
        localStorage.setItem(constants.LH_REFRESH_TOKEN_NAME, newRefreshToken);

        return axios.request(error.config);
      } catch (err) {
        console.log(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
