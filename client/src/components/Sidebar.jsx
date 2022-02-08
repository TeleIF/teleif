import "./../App.css";
import React, { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";

const Sidebar = () => {
    const [chats, setChats] = useState([
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "John Xina",
            title: "John Xina",
            subtitle: "Bing Chilling🥶🍦",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
    ]);

    return (<>
        <ChatList dataSource={chats} className='h-75' />
        <div>
            <input>
            
            </input>
            <button>+</button>
        </div>
    </>);
};

export default Sidebar;
