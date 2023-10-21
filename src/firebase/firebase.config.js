// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY, 
  authDomain: import.meta.env.VITE_AUTHDOMAIN, 
  projectId: import.meta.env.VITE_PROJECTID, 
  storageBucket: import.meta.env.VITE_STORAGEBUCKET, 
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APPID, 
};



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBlif8WHhJ36p5wx5Nz1CAKlVi83YLopmI",
//   authDomain: "brandshop-assignment-10-62b49.firebaseapp.com",
//   projectId: "brandshop-assignment-10-62b49",
//   storageBucket: "brandshop-assignment-10-62b49.appspot.com",
//   messagingSenderId: "854247594223",
//   appId: "1:854247594223:web:7d40b4295907d40467231a"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;