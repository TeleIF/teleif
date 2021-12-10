import './ChatPanel.scss'
import ChatArea from './ChatArea'
import ChatPanelHeader from './ChatPanelHeader'
import ChatInputArea from './ChatInputArea'
import { Box, Grid } from '@mui/material'

export default () => {
    return (
        <Box sx={{height: 1}}>
            <ChatPanelHeader />
            <ChatArea />
            <ChatInputArea />
        </Box>
    )
}