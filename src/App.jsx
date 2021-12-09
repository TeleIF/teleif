import ChatList from './components/layout/ChatList'
import ChatPanel from './components/layout/ChatPanel'
import { Box } from '@mui/material'
import './App.scss'

export default () =>
    <Box sx={{padding: '0', margin: '0', mx: 'auto', height: '100vh'}} className="App">
        <ChatList />
        <ChatPanel />
    </Box>