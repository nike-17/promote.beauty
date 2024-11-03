import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  token: string | null;
}

interface AuthContextType extends AuthState {
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    isAuthenticated: auth0IsAuthenticated,
    isLoading: auth0IsLoading,
    user: auth0User,
    loginWithRedirect,
    logout: auth0Logout,
    getAccessTokenSilently,
  } = useAuth0();

  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    user: null,
    token: null,
  });

  useEffect(() => {
    const initializeAuth = async () => {
      if (auth0IsAuthenticated && auth0User) {
        try {
          const token = await getAccessTokenSilently();
          setAuthState({
            isAuthenticated: true,
            isLoading: false,
            user: auth0User,
            token,
          });
        } catch (error) {
          console.error('Failed to get access token:', error);
          setAuthState({
            isAuthenticated: false,
            isLoading: false,
            user: null,
            token: null,
          });
        }
      } else if (!auth0IsLoading) {
        setAuthState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          token: null,
        });
      }
    };

    initializeAuth();
  }, [auth0IsAuthenticated, auth0IsLoading, auth0User, getAccessTokenSilently]);

  const login = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/campaigns'
      }
    });
  };

  const logout = () => {
    auth0Logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      token: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}