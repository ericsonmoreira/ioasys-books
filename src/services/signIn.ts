import api from '../api';

export interface SignInData {
  email: string;
  password: string;
}

export const signIn = (data: SignInData) => {
  return api.post('/auth/sign-in', data);
};
