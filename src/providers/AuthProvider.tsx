import React, {createContext, FC, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {auth, db, login, logout, register} from '../../firebase';
import {addDoc, collection} from '@firebase/firestore';
import {onAuthStateChanged, User} from 'firebase/auth';

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface IAuthProvider {
  children: JSX.Element | JSX.Element[];
}

export const AuthContext = createContext<IContext>({} as IContext);
export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user: dbUser} = await register(email, password);
      await addDoc(collection(db, 'users'), {
        _id: dbUser.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      Alert.alert('Error registration', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error logout', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user: User) => {
      setUser(user || null);
      setIsLoadingInitial(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
