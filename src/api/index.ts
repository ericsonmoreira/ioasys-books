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
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      try {
        await postRefreshToken();
        
        return axios.request(error.config);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
