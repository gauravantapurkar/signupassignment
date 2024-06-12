 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 
 const firebaseConfig = {
  apiKey: "AIzaSyCdL5D_kIknH_HYU5tgeO0VHisn-3DF-7w",
  authDomain: "signup-fadb6.firebaseapp.com",
  projectId: "signup-fadb6",
  storageBucket: "signup-fadb6.appspot.com",
  messagingSenderId: "214825986339",
  appId: "1:214825986339:web:5e5111e94b49cad4384496"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        showMessage('login is successful', 'signInMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='homepage.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
 })