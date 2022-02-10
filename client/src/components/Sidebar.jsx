import "./../App.css";
import React, { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";
import { PlusCircleFill as Plus } from "react-bootstrap-icons";

const Sidebar = () => {
    const [member, setMember] = useState("");
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
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
            date: new Date(),
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            alt: "Reactjs",
            title: "J",
            subtitle: "😢😢😢",
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

    return (
        <div className="sidebar">
            <div className="py-2">
                <div className="mx-3 mh-50">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Digite um usuário para iniciar uma conversa..."
                            value={member}
                            onChange={(e) => {
                                setMember(e.target.value);
                            }}
                            className="form-control"
                        />
                        <button className="btn btn-success">
                            <Plus />
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-75'>
                <ChatList dataSource={chats} />
            </div>
        </div>
    );
};

export default Sidebar;
