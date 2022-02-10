// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const { collection, addDoc, Timestamp } = require('firebase/firestore');
const { getStorage, ref } = require("firebase/storage");
const { } = require('lodash');
const express = require("express");




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBhV5bhggGk5shwwBpRtkmvGU4IM17f9nQ",
    authDomain: "teleif-4f42f.firebaseapp.com",
    projectId: "teleif-4f42f",
    storageBucket: "teleif-4f42f.appspot.com",
    messagingSenderId: "913167733686",
    appId: "1:913167733686:web:4292101741aca8fd306717",
    measurementId: "G-JXDG9J3RG0"
});

const auth = getAuth(firebaseApp);
db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in');
    } else {
        console.log('no user');
    }
})



const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Indicate port 3000 as host
var port = process.env.PORT || 8080;

// Make the server listens on port 3000
server.listen(port, function () {
    console.log("Server listening on port %d", port);
});

// Routing to static files
app.use(express.static(__dirname + "/public"));

// Socket server listens on connection event
io.on("connection", function (socket) {
    console.log("Connected and ready!");

    // firebase reference listens on value change, 
    // and return the data snapshot as an object
    firebaseRef.on("value", function (snapshot) {
        var colorChange = snapshot.val();

        // Print the data object's values
        console.log("snapshot R: " + colorChange.r);
        console.log("snapshot B: " + colorChange.b);
        console.log("snapshot G: " + colorChange.g);
    });
});
