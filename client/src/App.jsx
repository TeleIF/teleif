import './App.css'
import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import { Container } from 'react-bootstrap'

const App = () => {

  const [user, setUser] = useState({})
  const [authState, setAuthState] = useState()

  return (
    <Container className="h-100 w-100 p-0">
      {authState ? (<Main />) : (<Login />)}
    </Container>
  )
}

export default App;
