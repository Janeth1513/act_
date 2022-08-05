import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbPI7KP2mKvPHCoCEcXUGzGDLuWL19f9U",
  authDomain: "actividad-15-d439e.firebaseapp.com",
  databaseURL: "https://actividad-15-d439e-default-rtdb.firebaseio.com",
  projectId: "actividad-15-d439e",
  storageBucket: "actividad-15-d439e.appspot.com",
  messagingSenderId: "936783883259",
  appId: "1:936783883259:web:f48d05d86edcd5f5a3395e"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);