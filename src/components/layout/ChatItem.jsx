import './ChatItem.scss'
import { Box, Container } from '@mui/material'

export default (props) => 
    <Box className="ChatItem">
        <p className="TopDialogue">
            <Box component='span' className="Title">
                { props.title }
            </Box>
            <Box component='span' className="Time">
                { props.time }
            </Box>
        </p>
        <p className="BottomDialogue">
            <Box component='span' className="LastUser">{ props.lastUser }: </Box>
            <Box component='span' className="LastMessage">{ props.lastMessage }</Box>
        </p>
    </Box>
