// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTMOWRwJfqAHZ6X1LhwFrV3xN8prt_SKo",
    authDomain: "auth-coffie-app.firebaseapp.com",
    projectId: "auth-coffie-app",
    storageBucket: "auth-coffie-app.appspot.com",
    messagingSenderId: "467142463727",
    appId: "1:467142463727:web:7585adf8ec8c07160fcb1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBzpSBRjYYoyYLphK_fiVD66izEORtJgN8",
//     authDomain: "ethiopia-auth.firebaseapp.com",
//     projectId: "ethiopia-auth",
//     storageBucket: "ethiopia-auth.appspot.com",
//     messagingSenderId: "318817484846",
//     appId: "1:318817484846:web:cc3d12473cd9c6729d9fbf"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);