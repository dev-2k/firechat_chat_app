import firebase from 'firebase'
import "firebase/storage"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiicXeuMn6yiOaKMHDKKpy2Irn8yp_W3U",
    authDomain: "doctorsdoor-3eae9.firebaseapp.com",
    databaseURL: "https://doctorsdoor-3eae9-default-rtdb.firebaseio.com",
    projectId: "doctorsdoor-3eae9",
    storageBucket: "doctorsdoor-3eae9.appspot.com",
    messagingSenderId: "859249511194",
    appId: "1:859249511194:web:9083f72f8fc992da4b7aa3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage as default};