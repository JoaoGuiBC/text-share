import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as AuthSessions from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ASYNC_STORAGE_USER,
  ASYNC_STORAGE_TOKEN,
  GITHUB_CLIENT_ID,
} from '@env';

import { api } from '../services/api';

const scope = 'read:user';

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSigning: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigning, setIsSigning] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      setIsSigning(true);
      console.log(isSigning);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=${scope}`;
      const authSessionsReponse = (await AuthSessions.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (
        authSessionsReponse.type === 'success' &&
        authSessionsReponse.params.error !== 'access_denied'
      ) {
        const authResponse = await api.post<AuthResponse>('/authenticate', {
          code: authSessionsReponse.params.code,
        });

        const { token, user: responseUser } = authResponse.data;

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem(
          String(ASYNC_STORAGE_USER),
          JSON.stringify(responseUser)
        );
        await AsyncStorage.setItem(
          String(ASYNC_STORAGE_TOKEN),
          JSON.stringify(token)
        );

        setUser(responseUser);
        console.log(responseUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSigning(false);
    }
  }

  async function signOut() {}

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(
        String(ASYNC_STORAGE_USER)
      );
      const tokenStorage = await AsyncStorage.getItem(
        String(ASYNC_STORAGE_TOKEN)
      );

      if (userStorage && tokenStorage) {
        api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
      }

      setIsSigning(false);
    }

    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSigning,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
