import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAycPsrndySqgcDi0FmIOZjTKQEjAvaUI",
  authDomain: "supernova-clothing-db.firebaseapp.com",
  projectId: "supernova-clothing-db",
  storageBucket: "supernova-clothing-db.firebasestorage.app",
  messagingSenderId: "499192658205",
  appId: "1:499192658205:web:4efeb018401de8ce7f09f4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);