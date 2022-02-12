import React, { useContext, useState } from "react";
import { Chat } from "react-bootstrap-icons";

const ChatContext = React.createContext();
const ChatGetContext = React.createContext();
const ChatLoadContext = React.createContext();
const ChatSetLoadContext = React.createContext()

export const ChatProvider = ({ children, value }) => {
    const [chatId, setChatId] = useState("");
    const [isChatLoading, setIsChatLoading] = useState(false)

    const setCurrentChat = (id) => {
        setChatId(id);
    };

    return (
        <ChatContext.Provider value={chatId}>
            <ChatGetContext.Provider value={setCurrentChat}>
                <ChatLoadContext.Provider value={isChatLoading}>
                    <ChatSetLoadContext.Provider value={setIsChatLoading}>
                        {children}
                    </ChatSetLoadContext.Provider>
                </ChatLoadContext.Provider>
            </ChatGetContext.Provider>
        </ChatContext.Provider>
    );
};

export const useChatValue = () => {
    return useContext(ChatContext);
};

export const useGetChat = () => {
    return useContext(ChatGetContext);
};

export const useLoadChat = () => {
    return useContext(ChatLoadContext);
};

export const useSetLoadChat = () => {
    return useContext(ChatSetLoadContext);
};

