import React, { useEffect, useState, useRef } from "react";
import test from "../test";
import "./../App.css";
import { MessageList } from "react-chat-elements";
import { Container } from "react-bootstrap";
import { SendFill as Send, Paperclip as Clip, PlusCircleFill as Plus } from "react-bootstrap-icons";

const ChatArea = () => {
    const fileRef = useRef(null);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [member, setMember] = useState("");
    const [canSend, setCanSend] = useState(true);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        // TODO: logica de db

        fileRef.current.value = "";
        setFile(null);
        setMessage("");
    };

    useEffect(() => {
        if (file == null && !message) setCanSend(true);
        else setCanSend(false);
    }, [file, message]);

    return (
        <div className="chat-area vh-100 mh-100">
            <div className="chat-area-header w-100">
                <div className="input-group mx-auto pt-1 w-25">
                    <input
                        placeholder='Digite um usuário para adicionar à conversa...'
                        type="text"
                        value={member}
                        onChange={(e) => {
                            setMember(e.target.value);
                        }}
                        className="form-control"
                    />
                    <button className="btn btn-primary">
                        <Plus />
                    </button>
                </div>
            </div>
            <MessageList lockable={true} dataSource={test} className="h-75" />
            <Container className="input-area py-3 px-1">
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
                            (file == null ? "btn-success" : "btn-primary")
                        }
                    >
                        <Clip />
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        value={message}
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
            </Container>
        </div>
    );
};

export default ChatArea;
