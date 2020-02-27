import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvkqnQzVP7cKJFcQOmmoLDHabCOdVR_O8",
    authDomain: "crown-clothing-db-fe253.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-fe253.firebaseio.com",
    projectId: "crown-clothing-db-fe253",
    storageBucket: "crown-clothing-db-fe253.appspot.com",
    messagingSenderId: "340418369494",
    appId: "1:340418369494:web:1c2e6c7759af2cab867677"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
