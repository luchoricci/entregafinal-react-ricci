import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAzeI-m2oPabiQq97txt2PMEyRiXzNyr3s",
  authDomain: "proyecto-final-44b26.firebaseapp.com",
  projectId: "proyecto-final-44b26",
  storageBucket: "proyecto-final-44b26.appspot.com",
  messagingSenderId: "521396366554",
  appId: "1:521396366554:web:61570b620e2166d32949e3"

};


// Initialize Firebase

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>, 
)
