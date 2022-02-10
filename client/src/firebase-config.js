import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhV5bhggGk5shwwBpRtkmvGU4IM17f9nQ",
    authDomain: "teleif-4f42f.firebaseapp.com",
    databaseURL: "https://teleif-4f42f-default-rtdb.firebaseio.com",
    projectId: "teleif-4f42f",
    storageBucket: "teleif-4f42f.appspot.com",
    messagingSenderId: "913167733686",
    appId: "1:913167733686:web:4292101741aca8fd306717",
    measurementId: "G-JXDG9J3RG0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
