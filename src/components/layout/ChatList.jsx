import ChatItem from './ChatItem';
import ChatListHeader from './ChatListHeader'
import './ChatList.scss';
import groups from '../../data/groups';
import { Box, Divider, Stack } from '@mui/material';

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
        <Box sx={{position:'relative', height: 1, width: '25rem', justifySelf: 'left', margin: 0}}>
            <ChatListHeader />
            <Stack divider={<Divider sx={{ width: 0.85, margin: 'auto'}} orientation='horizontal' flexItem />} className='ChatList'>
                {cList}
            </Stack>
        </Box>
    );
};
