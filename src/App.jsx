import ChatList from './components/layout/ChatList'
import ChatPanel from './components/layout/ChatPanel'
import { Container } from '@mui/material'
import './App.scss'

export default () =>
    <Container className="App">
        <ChatList />
        <ChatPanel />
    </Container>