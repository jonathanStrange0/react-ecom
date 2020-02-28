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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  // if no userAuth object, return. there is no user logged in here
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    // if user id doesn't exist, create a user snapshot
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
