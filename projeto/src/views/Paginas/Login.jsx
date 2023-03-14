import React, { useState } from "react";
import './login.css'
import Botao from "../../componentes/botao";

const Login = props => {
    const [values, setValues] = useState({
        email: "",
        senha: ""
    })

    return (
        <div id="fundo">
            <div id="container">
                <div className="form-wrap">
                    <h1>BigZ</h1>
                    <i class="fa-solid fa-person-swimming"></i>
                    <form>
                        <div className="form-group">
                            <label for={"email"} ></label>
                            <input type={"email"} name={"email"} id={"email"} placeholder={"Enter email"} value={values["email"]}
                                onChange={e => {
                                    setValues({
                                        ...values,
                                        ["email"]: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="form-group">
                            <label for={"password"} ></label>
                            <input type={"password"} name={"password"} id={"password"} placeholder={"Enter Password"} value={values["senha"]}
                                onChange={e => {
                                    setValues({
                                        ...values,
                                        ["senha"]: e.target.value
                                    })
                                }} />
                        </div>
                        <Botao tipo="submit" />
                    </form>
                </div>
                <footer>
                    <p><b>Não possui conta? <a href="#">Cadastro</a></b></p>
                </footer>
            </div>
        </div>
    )
}

export default Login
