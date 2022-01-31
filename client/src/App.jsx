import './App.css'
import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import { Container } from 'react-bootstrap'
import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:8080'

const App = () => {

  const [socket, setSocket] = useState(null)
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    const s = io(ENDPOINT)
    setSocket(s)

    s.on("login", (res) => {
      if (res) {
        setAuthState(res)
      }
    })

    return () => {
      s.removeAllListeners("login")
      s.close()
    }
  }, [setSocket])

  return (
    <Container>
      {authState ? (<Main socket={socket} />) : (<Login socket={socket} />)}
    </Container>
  )
}

export default App;
