import ChatItem from './ChatItem';
import './ChatList.scss';
import groups from '../../data/groups';
import { Box, Divider, Stack, Fab, Zoom } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

export default () => {
    const cList = groups.map((group) => {
        return (
            <ChatItem
                key={group.id}
                title={group.title}
                time={group.lastMessage.time}
                lastUser={group.lastMessage.sender}
                lastMessage={group.lastMessage.message}
            />
        );
    });

    return (
        <Box sx={{position:'relative', height: '100vh', width: '25rem', justifySelf: 'left', margin: '0'}}>
            <Stack divider={<Divider orientation='horizontal' flexItem />} className='ChatList'>
                {cList}
            </Stack>
            <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
                <Fab className="ContactsButton">
                    <PeopleIcon />
                </Fab>
            </Zoom>
        </Box>
    );
};
