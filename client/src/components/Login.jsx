import React, { useState, useEffect } from "react";
import "./../App.css";
import {
    Tabs,
    Form,
    Tab,
    InputGroup,
    Button,
    Modal,
    Container,
} from "react-bootstrap";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useAuthValue } from "../AuthContext";

const Login = () => {
    const [loginFail, setLoginFail] = useState(false);
    const [signupFail, setSignupFail] = useState(false);
    const [emailVerification, setEmailVerification] = useState(false);

    const [username, setUsername] = useState("");
    const [domain, setDomain] = useState("ifsc.edu.br");
    const [password, setPassword] = useState("");

    const currentUser = useAuthValue();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = username + "@" + domain;

        signInWithEmailAndPassword(auth, email, password).then(() => {
            setUsername("");
            setPassword("");
            setDomain("ifsc.edu.br");
        }).catch(() => setLoginFail(true));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const email = username + "@" + domain;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setEmailVerification(true);
                        setUsername("");
                        setPassword("");
                        setDomain("ifsc.edu.br");
                    })
                    .catch((err) => alert(err.message));
            })
            .catch(() => setSignupFail(true));
    };

    return (
        <Container className="login-page mt-5 border border-2 rounded border-success">
            <Tabs defaultActiveKey="login" id="auth-tabs" className="mb-3 pt-2">
                <Tab eventKey="login" title="Login">
                    <Form>
                        <Form.Label htmlFor="username">
                            Endereço de email:
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <Form.Control
                                id="username"
                                type="text"
                                placeholder="Nome de usuário do SIGAA"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-label="Username"
                                aria-describedby="at"
                            />
                            <InputGroup.Text id="at">@</InputGroup.Text>
                            <Form.Select
                                aria-label="domain"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            >
                                <option value="ifsc.edu.br">ifsc.edu.br</option>
                                <option value="aluno.ifsc.edu.br">
                                    aluno.ifsc.edu.br
                                </option>
                            </Form.Select>
                        </InputGroup>
                        <Form.Group controlId="password" className="mb-2">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mb-2"
                            onClick={(e) => handleLogin(e)}
                            disabled={!(username && password)}
                        >
                            Entrar
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="signup" title="Criar conta">
                    <Form>
                        <Form.Label htmlFor="username2">
                            Endereço de email:
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <Form.Control
                                id="username2"
                                type="text"
                                placeholder="Nome de usuário do SIGAA"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-label="Username"
                                aria-describedby="at"
                            />
                            <InputGroup.Text id="at">@</InputGroup.Text>
                            <Form.Select
                                aria-label="domain"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            >
                                <option value="ifsc.edu.br">ifsc.edu.br</option>
                                <option value="aluno.ifsc.edu.br">
                                    aluno.ifsc.edu.br
                                </option>
                            </Form.Select>
                        </InputGroup>
                        <Form.Group controlId="password2    " className="mb-2">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mb-2"
                            onClick={(e) => handleSignup(e)}
                            disabled={!(username && password)}
                        >
                            Criar conta
                        </Button>
                    </Form>
                </Tab>
            </Tabs>

            <Modal
                show={loginFail}
                className="w-25 modals"
                onHide={() => setLoginFail(false)}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Falha na autenticação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Houve uma falha na autenticação, confira seus dados e tente
                    novamente.
                </Modal.Body>
            </Modal>

            <Modal
                show={signupFail}
                className="w-25 display-block modals"
                onHide={() => setSignupFail(false)}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Erro na criação de conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>Email já cadastrado.</Modal.Body>
            </Modal>

            <Modal
                show={emailVerification}
                className="w-25 display-block modals"
                onHide={() => setEmailVerification(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Verifique seu email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Um email de verificação foi enviado para <strong>{auth.currentUser?.email}</strong>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Login;
