import api from '../api';
import constants from '../constants';

export const postRefreshToken = async () => {
  const refreshToken = window.localStorage.getItem(
    constants.LH_REFRESH_TOKEN_NAME
  ) as string;

  const { headers } = await api.post('/auth/refresh-token', { refreshToken });

  window.localStorage.setItem(constants.LH_TOKEN_NAME, headers.authorization);

  window.localStorage.setItem(
    constants.LH_REFRESH_TOKEN_NAME,
    headers['refresh-token']
  );
};
