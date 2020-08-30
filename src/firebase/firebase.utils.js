import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCxUTC8sVIToBrb6oVftIZGnrLPbyPQ1YM",
    authDomain: "wejalesson.firebaseapp.com",
    databaseURL: "https://wejalesson.firebaseio.com",
    projectId: "wejalesson",
    storageBucket: "wejalesson.appspot.com",
    messagingSenderId: "704073173154",
    appId: "1:704073173154:web:2c4c2439f10e85bc55effb",
    measurementId: "G-1XNDCYN44G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// SETTING UP GOOGLE AUTHENTICATION UTILITY
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;