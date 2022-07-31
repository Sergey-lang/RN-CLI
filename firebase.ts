import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTwI-DLW2rkBEUVDqwRQi14S8ozc8EP78',
  authDomain: 'test-push-notificatoin.firebaseapp.com',
  projectId: 'test-push-notificatoin',
  storageBucket: 'test-push-notificatoin.appspot.com',
  messagingSenderId: '21261012596',
  appId: '1:21261012596:web:9bd0aec98e325cbf644b21',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
