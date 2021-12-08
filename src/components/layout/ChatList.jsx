import ChatItem from './ChatItem';
import './ChatList.scss';
import groups from '../../data/groups';
import { Fab, Zoom } from '@mui/material';
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
        <div className='ChatList'>
            {cList}
            <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
                <Fab>
                    <PeopleIcon />
                </Fab>
            </Zoom>
        </div>
    );
};
