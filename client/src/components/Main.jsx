import "./../App.css";
import {useEffect} from "react";
import {useAuthValue} from '../AuthContext'
import ChatArea from "./ChatArea";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
    const currentUser = useAuthValue();

    useEffect(() => {
        console.log(currentUser)
    }, [])

    return (
        <Container className="p-0">
            <Row className='m-0'>
                <Col className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={9} className="p-0">
                    <ChatArea />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
