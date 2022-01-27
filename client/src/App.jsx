import './App.css'
import React, { useState, useEffect } from 'react'
import ChatArea from './components/ChatArea'
import { ChatList } from 'react-chat-elements'
import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:8080'

const App = () => {

  const [socket, setSocket] = useState(null)
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const s = io(ENDPOINT)
    setSocket(s)

    return () => s.close()
  }, [setSocket])
  

  return (
    <div className='App'>
      <div>
        <div>

        </div>
        <div>
          <ChatList
            dataSource={ contacts }
          />
        </div>
        <div>
          <ChatArea socket={ socket } />
        </div>
      </div>
    </div>
  );
}

export default App;
