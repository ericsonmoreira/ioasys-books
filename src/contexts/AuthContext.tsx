import { createContext, useCallback } from 'react';
import api from '../api';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LH_USER_NAME = 'ioasys-books:user';

const LH_TOKEN_NAME = 'ioasys-books:token';

const LH_REFRESH_TOKEN_NAME = 'ioasys-books:refresh-token';

type TokenState = string | null;

type UserState = UserData | null;

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

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserState>(LH_USER_NAME, null);

  const [token, setToken] = useLocalStorage<TokenState>(LH_TOKEN_NAME, null);

  const [refreshToken, setRefreshToken] = useLocalStorage<TokenState>(
    LH_REFRESH_TOKEN_NAME,
    null
  );

  const signIn = useCallback(async ({ email, password }: SignInData) => {
    const response = await api.post('/auth/sign-in', {
      email,
      password,
    });

    console.log(JSON.stringify(response.headers, undefined, 2));
  }, []);

  const signOut = useCallback(async () => {
    setToken(null);
    setRefreshToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, refreshToken, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
