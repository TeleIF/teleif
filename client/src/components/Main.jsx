import "./../App.css";
import React from "react";
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";

const Main = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <ChatArea />
        </div>
    );
};

export default Main;
