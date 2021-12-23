import test from '../test'
import './../App.scss'
import 'react-chat-elements/dist/main.css';
import { Button, Input, MessageList } from 'react-chat-elements'

const ChatArea = () => {
    return (
        <>
            <MessageList
                lockable={true}
                toBottomHeight='100%'
                // dataSource={test}
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
        </>
    )
}

export default ChatArea;