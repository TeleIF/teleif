import React from 'react'
import ChatArea from './ChatArea'
import Sidebar from './Sidebar'

const Main = ({ socket }) => {
    return (
        <div className='App'>
            <div>
                <Sidebar socket={socket} />
            </div>
            <div>
                <ChatArea socket={socket} />
            </div>
        </div>
    )
}

export default Main