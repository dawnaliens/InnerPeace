// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQbdNkbkef_QcUEdt1QpcIkyATHR-PEw",
  authDomain: "t2-project-c26f3.firebaseapp.com",
  projectId: "t2-project-c26f3",
  storageBucket: "t2-project-c26f3.appspot.com",
  messagingSenderId: "204751048350",
  appId: "1:204751048350:web:5fae0ec81a7e524404f58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();