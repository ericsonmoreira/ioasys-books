import { createContext, useCallback } from 'react';
import api from '../api';
import constants from '../constants';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type TokenState = string | null;

export type UserState = UserData | null;

export interface UserData {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthContextState {
  user: UserState;
  token: TokenState;
  refreshToken: TokenState;
  signIn({ email, password }: SignInData): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserState>(
    constants.LH_USER_NAME,
    null
  );

  const [token, setToken] = useLocalStorage<TokenState>(
    constants.LH_TOKEN_NAME,
    null
  );

  const [refreshToken, setRefreshToken] = useLocalStorage<TokenState>(
    constants.LH_REFRESH_TOKEN_NAME,
    null
  );

  const signIn = useCallback(async ({ email, password }: SignInData) => {
    const { data, headers } = await api.post('/auth/sign-in', {
      email,
      password,
    });
    
    setUser(data);

    setToken(headers.authorization);

    setRefreshToken(headers['refresh-token']);
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);

    setToken(null);

    setRefreshToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, refreshToken, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
