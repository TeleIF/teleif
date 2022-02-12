import React, { useContext, useState } from "react";

const ChatContext = React.createContext();
const ChatGetContext = React.createContext();

export const ChatProvider = ({ children, value }) => {
    const [chatId, setChatId] = useState("");

    const setCurrentChat = (id) => {
        setChatId(id);
    };

    return (
        <ChatContext.Provider value={chatId}>
            <ChatGetContext.Provider value={setCurrentChat}>
                {children}
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
