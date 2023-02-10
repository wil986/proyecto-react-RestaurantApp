import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtax_bvmLDO8R3cfHupotwWbiDACOWK2s",
    authDomain: "iniciodetodo-54987.firebaseapp.com",
    databaseURL: "https://iniciodetodo-54987-default-rtdb.firebaseio.com",
    projectId: "iniciodetodo-54987",
    storageBucket: "iniciodetodo-54987.appspot.com",
    messagingSenderId: "500231058354",
    appId: "1:500231058354:web:bb0022c07ffae986e1eaab",
  };
  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

  export default appFirebase;