import api from '../api';

interface PostRefreshTokenParams {
  refreshToken: string | undefined;
}

interface PostRefreshTokenData {
  newToken: string;
  newRefreshToken: string;
}

export const postRefreshToken = async ({
  refreshToken,
}: PostRefreshTokenParams): Promise<PostRefreshTokenData> => {
  const { headers } = await api.post('/auth/refresh-token', { refreshToken });

  return {
    newToken: headers.authorization,
    newRefreshToken: headers['refresh-token'],
  };
};
