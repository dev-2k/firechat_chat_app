import firebase from 'firebase'
import "firebase/storage"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVxWP2qI74TvCiPx80A3CDCRDoPgwc-Vc",
    authDomain: "firechat-c1363.firebaseapp.com",
    projectId: "firechat-c1363",
    storageBucket: "firechat-c1363.appspot.com",
    messagingSenderId: "979058163783",
    appId: "1:979058163783:web:ea30bd0350c4e26f83b162",
    measurementId: "G-GJQR1BX1WR"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage as default};