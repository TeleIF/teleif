import "./../App.css";
import React, { useState, useEffect } from "react";
import { ChatList } from "react-chat-elements";
import { getAuth, signOut } from "firebase/auth";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import {
    PlusCircleFill as Plus,
    DoorOpenFill as Door,
} from "react-bootstrap-icons";
import { useGetChat } from "../ChatContext";

const Sidebar = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [chats, setChats] = useState([]);
    const chatsRef = collection(db, "chats");
    const q = query(
        chatsRef,
        where("members", "array-contains", auth.currentUser?.displayName)
    );
    const setChatId = useGetChat()
    
    useEffect(() => {
        const qs = getDocs(q);
        let list = [];
        qs.then((res) => {
            res.docs.map((x) => {
                list.push({
                    ...x.data(),
                    date: x.data().date.toDate(),
                    id: x.id,
                });

                return null;
            });
            list.sort((a, b) => new Date(b.date) - new Date(a.date))
            setChats(list);
        });
        setIsLoading(false);
    }, [isLoading]);

    const createChat = () => {
        if (title) {
            addDoc(chatsRef, {
                messages: [],
                title: [title],
                subtitle: "",
                date: new Date(),
                members: new Array(auth.currentUser?.displayName),
                avatar: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small/user_icon_007.jpg",
            });
            setTitle("");
            setIsLoading(true);
        }
    };

    const handleClick = (res) => {
        setChatId(res.id)
    }

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar-header p-2 mb-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => signOut(auth)}
                    >
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
                        <button
                            className="btn btn-success"
                            onClick={createChat}
                        >
                            Criar <Plus />
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-75">
                <ChatList
                    dataSource={chats}
                    onClick={(res) => {
                        handleClick(res)
                    }}
                />
            </div>
        </div>
    );
};

export default Sidebar;
