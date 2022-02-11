import "./../App.css";
import React, { useState, useEffect } from "react";
import {useAuthValue} from '../AuthContext'
import { ChatList } from "react-chat-elements";
import { getAuth, signOut } from "firebase/auth";
import {
    PlusCircleFill as Plus,
    DoorOpenFill as Door,
} from "react-bootstrap-icons";

const Sidebar = () => {
    const auth = getAuth();
    const [title, setTitle] = useState("");
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});

    return (
        <div className="sidebar">
            <div>
                <div className='sidebar-header p-2 mb-2'>
                    <button className="btn btn-primary" onClick={() => signOut(auth)}>
                        <Door />
                    </button>
                </div>
                <div className="mx-3 d-flex pb-2">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Nome do grupo..."
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="form-control"
                        />
                        <button className="btn btn-success">
                            Criar <Plus />
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-75">
                <ChatList
                    dataSource={chats}
                    onClick={(res) => console.log(res)}
                />
            </div>
        </div>
    );
};

export default Sidebar;
