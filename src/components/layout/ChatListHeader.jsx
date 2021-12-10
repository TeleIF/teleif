import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, IconButton } from '@mui/material';

export default props => {
    return (
        <Box sx={{height: '3rem', justifyItems: 'right'}}>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </Box>
    )
}