import React, { useState, useEffect } from 'react'
import './../App.css'

const Login = ({ socket }) => {
    const [username, setUsername] = useState('')
    const [domain, setDomain] = useState('ifsc.edu.br')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const stringToHash = (password) => {

        let hash = 0;

        if (password.length == 0) return hash;

        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }

        console.log(hash)
        return hash;
    }

    const handleLogin = () => {
        socket.emit('handle-login', {
            username: username,
            domain: domain,
            password: password
        })
    }

    return (
        <div className="container-sm">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Login
                    </a>
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10 input-group">
                                <input type="text" value={username} className="form-control" id="email" placeholder="Usuário do SIGAA" onChange={(e) => { setUsername(e.target.value) }} />
                                <div className="input-group-text">@</div>
                                <select className="form-select" value={domain} onChange={(e) => setDomain(e.target.value)}>
                                    <option value="ifsc.edu.br">ifsc.edu.br</option>
                                    <option value="aluno.ifsc.edu.br">aluno.ifsc.edu.br</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="password" className="col-sm-2 col-form-label">Senha</label>
                            <div className="col-sm-10">
                                <input type="password" placeholder="Máximo de 36 caracteres" value={password} className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} maxLength="36" />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary' onClick={() => stringToHash(password)} disabled={!(password && username)}>Entrar</button>
                    </form>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Criar conta
                    </a>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Manter Login
                                </label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Login