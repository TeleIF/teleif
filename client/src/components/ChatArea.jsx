import React, { useEffect, useState, useRef } from "react";
import test from "../test";
import "./../App.css";
import { MessageList } from "react-chat-elements";
import { Container } from "react-bootstrap";
import { SendFill as Send, Paperclip as Clip } from "react-bootstrap-icons";

const ChatArea = () => {
    const fileRef = useRef(null);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
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
        <div className="chat-area">
            <div className="chat-area-header w-100"></div>
            <MessageList lockable={true} dataSource={test} className="h-75" />
            <Container className="input-area input-group py-3 align-items-center px-1">
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
                        "btn border rounded " +
                        (file == null ? "btn-success" : "btn-primary")
                    }
                >
                    <Clip />
                </button>
                <input
                    type="text"
                    className="form-control py-1"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <button
                    type="button"
                    className="btn btn-success border rounded"
                    onClick={handleSubmit}
                    disabled={canSend}
                >
                    <Send />
                    <span> Enviar</span>
                </button>
            </Container>
        </div>
    );
};

export default ChatArea;
