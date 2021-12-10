import ChatList from './components/layout/ChatList'
import ChatPanel from './components/layout/ChatPanel'
import { Box, Grid } from '@mui/material'
import './App.scss'

export default () =>
    <Box sx={{ width: 0.9, height: 1, padding: '0', my: '0', mx: 'auto' }} className="App">
        <Grid container spacing={0}>
            <Grid item>
                <ChatList />
            </Grid>
            <Grid item xs>
                <ChatPanel />
            </Grid>
        </Grid>
    </Box>