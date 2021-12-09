import ChatList from './components/layout/ChatList'
import ChatPanel from './components/layout/ChatPanel'
import { Box, Grid } from '@mui/material'
import './App.scss'

export default () =>
    <Box sx={{ padding: '0', margin: '0', mx: 'auto', height: '100vh' }} className="App">
        <Grid container spacing={0}>
            <Grid item>
                <ChatList />
            </Grid>
            <Grid item xs>
                <ChatPanel />
            </Grid>
        </Grid>
    </Box>