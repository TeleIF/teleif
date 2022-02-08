import React, { useEffect, useState } from 'react';
import test from '../test'
import './../App.css'
import { Button, Input, MessageList } from 'react-chat-elements'

const ChatArea = () => {

    return (
        <div className="chat-area">
            <div>
                {/* header aqui */}
            </div>
            <MessageList
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={ test }
            />
            <Input
                placeholder="Type here..."
                autoHeight={true}
                multiline={false}
                rightButtons={
                    <Button
                        color='white'
                        backgroundColor='black'
                        text='Send' />
                } />
        </div>
    )
}

export default ChatArea;