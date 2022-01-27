import './App.css'
import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:8080'

const App = () => {

  const [socket, setSocket] = useState(null)
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    const s = io(ENDPOINT)
    setSocket(s)

    return () => s.close()
  }, [setSocket])

  return (
    <>
      {authState ? (<Main socket={socket} />) : (<Login socket={socket} />)}
    </>
  )
}

export default App;
