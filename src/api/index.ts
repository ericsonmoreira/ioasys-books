import axios from 'axios';
import constants from '../constants';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

api.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem(constants.LH_TOKEN_NAME);

  if (token) {
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${token as string}`;
    }
  }

  return config;
});

export default api;
