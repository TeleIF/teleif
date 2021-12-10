import { Box, TextField, IconButton } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile'; 
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';

export default props => {
    return (
        <Box sx={{width: 1, height: '2rem', margin: 'auto'}}>
            <IconButton size='large'>
                <AttachFileIcon />
            </IconButton>
            <IconButton size='large'>
                <EmojiEmotionsIcon />
            </IconButton>
            <TextField variant='standard' type='text' required='true' multiline='false' margin='dense' />
            <IconButton size='large'>
                <MicIcon />
            </IconButton>
        </Box>
    )
}