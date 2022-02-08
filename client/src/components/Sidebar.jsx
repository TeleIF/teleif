import "./../App.css";
import React, { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";

const Sidebar = () => {
    const [contacts, setContacts] = useState([
        {
            avatar: "https://c.tenor.com/cWsK6nwdcHYAAAAM/bing-chi-ling-alex-mei-bing.gif",
            alt: "John Xina",
            title: "John Xina",
            subtitle: "Bing Chilling🥶🍦",
            date: new Date(),
            unread: 1,
        },
        {
            avatar: "https://c.tenor.com/AceFzoOKEGIAAAAC/spongebob-spongebob-cry.gif",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
            unread: 23,
        },
    ]);

    return <ChatList dataSource={contacts} className='sidebar' />;
};

export default Sidebar;
