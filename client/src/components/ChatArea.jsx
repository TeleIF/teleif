import React, { useEffect, useState, useRef } from "react";
import "./../App.css";
import { MessageList } from "react-chat-elements";
import {
    SendFill as Send,
    Paperclip as Clip,
    PlusCircleFill as Plus,
} from "react-bootstrap-icons";
import { auth, db, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
    updateDoc,
    collection,
    doc,
    arrayUnion,
    getDoc,
    getDocs,
} from "firebase/firestore";
import { useChatValue, useSetLoadChat } from "../ChatContext";
import { useDocumentData } from "react-firebase-hooks/firestore";

const ChatArea = () => {
    const chatId = useChatValue();
    const setChatLoading = useSetLoadChat();
    const chatsRef = doc(db, "chats", chatId);
    const fileRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [member, setMember] = useState("");
    const [canSend, setCanSend] = useState(true);
    const [messagesSnapshot] = useDocumentData(chatsRef);

    const scrollToBottom = () => {
        document.querySelector(".rce-mlist").scrollTop =
            document.querySelector(".rce-mlist").scrollHeight;
    };

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handleUpload = () => {
        const storageRef = ref(storage, `/images/${file.name}`);
        uploadBytes(storageRef, file).then((res) => {
            getDownloadURL(storageRef).then((currentUrl) => {
                setUrl(currentUrl);
                updateDoc(chatsRef, {
                    messages: arrayUnion({
                        sender: auth.currentUser?.uid,
                        text: message,
                        position: "left",
                        type: "photo",
                        title: auth.currentUser?.email.split("@")[0],
                        date: new Date(),
                        data: {
                            uri: [currentUrl],
                            status: {
                                loading: 0,
                                click: true,
                            },
                        },
                    }),
                });
            });
        });
    };

    const handleUpload = () => {
        const storageRef = ref(storage, `/images/${file.name}`);
        uploadBytes(storageRef, file).then((res) => {
            getDownloadURL(storageRef).then((currentUrl) => {
                setUrl(currentUrl);
                updateDoc(chatsRef, {
                    messages: arrayUnion({
                        sender: auth.currentUser?.uid,
                        text: message,
                        position: "left",
                        type: "photo",
                        title: auth.currentUser?.email.split("@")[0],
                        date: new Date(),
                        data: {
                            uri: [currentUrl],
                            status: {
                                loading: 0,
                                click: true,
                            },
                        },
                    }),
                });
            });
        });
    };

    const handleSubmit = () => {
        if (!file) {
            updateDoc(chatsRef, {
                messages: arrayUnion({
                    sender: auth.currentUser?.uid,
                    text: message,
                    position: "left",
                    type: "text",
                    title: auth.currentUser?.email.split("@")[0],
                    date: new Date(),
                }),
                subtitle: message,
                date: new Date(),
            });
        } else {
            handleUpload();
        }
        setChatLoading(true);
        setIsLoading(true);
        fileRef.current.value = "";
        setFile(null);
        setMessage("");
    };

    const handleAdd = () => {
        updateDoc(chatsRef, { members: arrayUnion(member) });

        setMember("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && canSend) {
            handleSubmit();
        }
    };

    useEffect(() => {
        if (file == null && !message) setCanSend(true);
        else setCanSend(false);
    }, [file, message]);

    useEffect(() => {
        scrollToBottom();
    }, [messageList]);

    useEffect(() => {
        getDoc(chatsRef).then((res) => {
            const list = [];
            res.data().messages.map((x) => {
                if (auth.currentUser?.uid === x.sender) {
                    list.push({
                        ...x,
                        date: x.date.toDate(),
                        position: "right",
                    });
                } else {
                    list.push({
                        ...x,
                        date: x.date.toDate(),
                    });
                }
            });
            setMessageList(list);
        });
        setIsLoading(false);
    }, [isLoading, url, chatId, messagesSnapshot]);

    return (
        <div className="chat-area vh-100 mh-100">
            <div className="chat-area-header w-100">
                <div className="input-group mx-auto pt-1 w-25">
                    <input
                        placeholder="Nome de usuário..."
                        type="text"
                        value={member}
                        onChange={(e) => {
                            setMember(e.target.value);
                        }}
                        className="form-control"
                    />
                    <button className="btn btn-primary" onClick={handleAdd}>
                        Adicionar <Plus />
                    </button>
                </div>
            </div>
            <MessageList
                lockable={true}
                dataSource={messageList}
                toBottomHeight="100%"
                className="mbox"
                onClick={(res) => {
                    window.open(res.data.uri, '_blank').focus()
                }}
            />
            <footer className="text-center text-white">
                <div className="input-area w-100">
                    <div className="mx-auto w-75 pt-1">
                        <div className="input-group">
                            <input
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFile}
                                hidden
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    fileRef.current.click();
                                }}
                                className={
                                    "btn " +
                                    (file == null
                                        ? "btn-success"
                                        : "btn-primary")
                                }
                            >
                                <Clip />
                            </button>
                            <input
                                type="text"
                                className="form-control"
                                value={message}
                                onKeyPress={handleKeyDown}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleSubmit}
                                disabled={canSend}
                            >
                                <Send />
                                <span> Enviar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ChatArea;
