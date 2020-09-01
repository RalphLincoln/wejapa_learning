import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// THIS IS THE GENERAL CONFIGURATION
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



// SAVING USER TO THE DATA BASE FUNCTION
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exist) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// SETTING UP GOOGLE AUTHENTICATION UTILITY
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;