// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCAmoUkwdCeNhJkwg8-cNu4oNLfpgmADk8',
	authDomain: 'clone-f433a.firebaseapp.com',
	projectId: 'clone-f433a',
	storageBucket: 'clone-f433a.appspot.com',
	messagingSenderId: '217742298583',
	appId: '1:217742298583:web:f6a37f04a1fb1444654f92',
	measurementId: 'G-GD4JQNYQ14'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
