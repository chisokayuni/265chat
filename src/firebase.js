import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGJ0sx6rJEYR5Y62xAW9gKSXTTqt_5oZ4",
  authDomain: "chat-6e477.firebaseapp.com",
  projectId: "chat-6e477",
  storageBucket: "chat-6e477.appspot.com",
  messagingSenderId: "76613524215",
  appId: "1:76613524215:web:64180e100a55f8c515d1f2",
  measurementId: "G-8NNP1E16YN"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}