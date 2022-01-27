import React from 'react'
import './../App.css'

const Login = ({ socket }) => {
    const submitLogin = () => {
        
    }

    return (
        <div className="container-xl">
            <div className="container-sm">
                <form className="row gx-3 gy-2">
                    <div>
                        <label for="inputPassword6" class="col-form-label">Email insitucional: </label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                            />
                            <div className="input-group-text">@</div>
                            <select className="form-select">
                                <option defaultValue>Escolha...</option>
                                <option value="1">ifsc.edu.br</option>
                                <option value="2">aluno.ifsc.edu.br</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="inputPassword6" class="col-form-label">Senha: </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login