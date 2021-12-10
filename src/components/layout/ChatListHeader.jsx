import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, IconButton, iconButtonClasses } from '@mui/material';
import './ChatListHeader.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default props => {
    return (
        <box className = 'ChatList'>
            <Box className = "ChatListHeader">
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
                <box className = "ChatListHeaderRight">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </box>
            </Box>
        </box>
    )
}