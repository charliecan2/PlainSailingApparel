import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDOSWVPm1ykDXJWZeY7gIfelRqijYIlfB8",
    authDomain: "psa-db.firebaseapp.com",
    projectId: "psa-db",
    storageBucket: "psa-db.appspot.com",
    messagingSenderId: "918382555770",
    appId: "1:918382555770:web:9f824bf46dec0540cac1c3",
    measurementId: "G-WXCHB489X7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;