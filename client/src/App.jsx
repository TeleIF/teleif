import './App.css'
import React, { useState, useEffect } from 'react'
import ChatArea from './components/ChatArea'
import { ChatList } from 'react-chat-elements'
import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:8080'

const App = () => {

  useEffect(() => {
    const socket = io(ENDPOINT)

    return () => socket.disconnect()
  }, [])
  const [convos, setConvos] = useState([{
    avatar: 'https://c.tenor.com/cWsK6nwdcHYAAAAM/bing-chi-ling-alex-mei-bing.gif',
    alt: 'John Xina',
    title: 'John Xina',
    subtitle: 'Bing Chilling🥶🍦',
    date: new Date(),
    unread: 1,
  },
  {
    avatar: 'https://c.tenor.com/AceFzoOKEGIAAAAC/spongebob-spongebob-cry.gif',
    alt: 'Reactjs',
    title: 'J',
    subtitle: '😢😢😢',
    date: new Date(),
    unread: 23,
  }])

  return (
    <div className='App'>
      <div>
        <div>
          <ChatList
            dataSource={convos}
          />
        </div>
        <div>
          <ChatArea />
        </div>
      </div>
    </div>
  );
}

export default App;
