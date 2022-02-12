import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Container } from "react-bootstrap";
import { ChatProvider } from "./ChatContext";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    return (
        <ChatProvider>
            <Container className="vh-100 w-100 p-0">
                {auth.currentUser?.emailVerified ? <Main /> : <Login />}
            </Container>
        </ChatProvider>
    );
}

export default App;
