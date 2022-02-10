import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import { AuthProvider } from "./AuthContext";
import Login from "./components/Login";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Container } from "react-bootstrap";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
      })
    }, [])

    return (
        <Container className="vh-100 w-100 p-0">
            <AuthProvider value={{ currentUser }}>
                { currentUser?.emailVerified ? <Main /> : <Login />}
            </AuthProvider>
        </Container>
    );
}

export default App;
