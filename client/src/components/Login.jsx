import React, { useState, useEffect } from 'react'
import './../App.css'
import { Tabs, Form, Tab, InputGroup, Button, Modal } from 'react-bootstrap'

const Login = ({ socket }) => {
    const [loginFail, setLoginFail] = useState(false)
    const [signupFail, setSignupFail] = useState(false)

    const [username, setUsername] = useState('')
    const [domain, setDomain] = useState('ifsc.edu.br')
    const [password, setPassword] = useState('')
    const [keepLogin, setKeepLogin] = useState(false)

    const stringToHash = (password) => {
        let hash = 0

        if (password.length === 0) return hash

        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }

        return hash;
    }

    const handleLogin = (e) => {
        e.preventDefault()
        socket.emit('handle-login', {
            username: username,
            domain: domain,
            password: stringToHash(password),
            keepLogin: keepLogin
        })
    }

    const handleSignup = (e) => {
        e.preventDefault()
        socket.emit('handle-signup', {
            username: username,
            domain: domain,
            password: stringToHash(password)
        })
    }

    useEffect(() => {
        socket.on('login-fail', setLoginFail(true))
        socket.on('signup-fail', setSignupFail(true))

        return () => {
            socket.off('login-fail', setLoginFail(true))
            socket.off('signup-fail', setSignupFail(true))
        }
    }, [socket])

    return (
        <>
            <Tabs defaultActiveKey="login" id="auth-tabs" className="mb-3 w-100 h-100 mx-auto">
                <Tab eventKey="login" title="Login">
                    <Form>
                        <Form.Label htmlFor="username">Endereço de email:</Form.Label>
                        <InputGroup className="mb-2">
                            <Form.Control id="username" type="text" placeholder="Nome de usuário do SIGAA" value={username} onChange={(e) => setUsername(e.target.value)} aria-label="Username" aria-describedby="at" />
                            <InputGroup.Text id="at">@</InputGroup.Text>
                            <Form.Select aria-label="domain" value={domain} onChange={(e) => setDomain(e.target.value)}>
                                <option value="ifsc.edu.br">ifsc.edu.br</option>
                                <option value="aluno.ifsc.edu.br">aluno.ifsc.edu.br</option>
                            </Form.Select>
                        </InputGroup>
                        <Form.Group controlId="password" className="mb-2">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Check type="checkbox" id="keep-login" label="Manter login" className="mb-2" onChange={() => setKeepLogin(!keepLogin)} />
                        <Button variant="primary" type="submit" onClick={(e) => handleLogin(e)} disabled={!(username && password)}>Entrar</Button>
                    </Form>
                </Tab>
                <Tab eventKey="signup" title="Criar conta">
                    <Form>
                        <Form.Label htmlFor="username2">Endereço de email:</Form.Label>
                        <InputGroup className="mb-2">
                            <Form.Control id="username2" type="text" placeholder="Nome de usuário do SIGAA" value={username} onChange={(e) => setUsername(e.target.value)} aria-label="Username" aria-describedby="at" />
                            <InputGroup.Text id="at">@</InputGroup.Text>
                            <Form.Select aria-label="domain" value={domain} onChange={(e) => setDomain(e.target.value)}>
                                <option value="ifsc.edu.br">ifsc.edu.br</option>
                                <option value="aluno.ifsc.edu.br">aluno.ifsc.edu.br</option>
                            </Form.Select>
                        </InputGroup>
                        <Form.Group controlId="password2    " className="mb-2">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => handleSignup(e)} disabled={!(username && password)}>Criar conta</Button>
                    </Form>
                </Tab>
            </Tabs>

            <Modal show={loginFail} onHide={() => setLoginFail(false)} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Falha na autenticação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Houve uma falha na autenticação, confira seus dados e tente novamente.
                </Modal.Body>
            </Modal>

            <Modal show={signupFail} onHide={() => setSignupFail(false)} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Erro na criação de conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Email já cadastrado.
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login