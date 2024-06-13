
import { initializeApp } from "firebase/app"; 
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCDek4QwNKfCJMTdGA43mTERrG3O1i_QvY",
  authDomain: "meuapp-41fb5.firebaseapp.com",
  databaseURL: "https://meuapp-41fb5-default-rtdb.firebaseio.com",
  projectId: "meuapp-41fb5",
  storageBucket: "meuapp-41fb5.appspot.com",
  messagingSenderId: "755701897655",
  appId: "1:755701897655:web:2ad621dd71b2151db1b032",
  measurementId: "G-BF5QNC5SGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

export { database };
  
  

  
