import './../App.css'
import React from 'react'
import ChatArea from './ChatArea'
import Sidebar from './Sidebar'
import { Col, Container, Row } from 'react-bootstrap'

const Main = ({ socket }) => {
    return (
        <Container className='h-100 my-auto' style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <Sidebar socket={socket} />
                </Col>
                <Col>
                    <ChatArea socket={socket} />
                </Col>
            </Row>
        </Container>
    )
}

export default Main