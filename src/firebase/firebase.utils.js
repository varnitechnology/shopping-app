import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJt6ZvLvsSpz6nVr1_CPHfk9xpxgjlwuc",
    authDomain: "shopping-db-5647b.firebaseapp.com",
    projectId: "shopping-db-5647b",
    storageBucket: "shopping-db-5647b.appspot.com",
    messagingSenderId: "548359745409",
    appId: "1:548359745409:web:c02775dd46ba4489420280",
    measurementId: "G-JWDWY8DZH9"
  };

  // Initialize Firebase
initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({params: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth,provider);
