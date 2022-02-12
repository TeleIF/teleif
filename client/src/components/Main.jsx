import "./../App.css";
import { useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

import { useChatValue } from "../ChatContext";

const Main = () => {
    const chatId = useChatValue();

    return (
        <Container className="p-0">
            <Row className="m-0">
                <Col className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={9} className="p-0">
                    {chatId ? <ChatArea /> : null}
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
