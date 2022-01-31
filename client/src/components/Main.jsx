import './../App.css'
import React from 'react'
import ChatArea from './ChatArea'
import Sidebar from './Sidebar'

const Main = ({ socket }) => {
    return (
        <div className='row h-100 my-auto'>
            <div className='col-4'>
                <Sidebar socket={socket} />
            </div>
            <div className='col-sm-8'> 
                <ChatArea socket={socket} />
            </div>
        </div>
    )
}

export default Main