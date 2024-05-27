// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'uncle-sula-blog.firebaseapp.com',
  projectId: 'uncle-sula-blog',
  storageBucket: 'uncle-sula-blog.appspot.com',
  messagingSenderId: '962296811335',
  appId: '1:962296811335:web:62a8bdee14db39acd44662',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
