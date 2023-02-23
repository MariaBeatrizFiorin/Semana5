import React from "react";
import './login.css'
import Botao from "../../componentes/botao";
import FormGroup from "../../componentes/input";

const Login = props => (
    <div id="container">
        <div className="form-wrap">
            <h1>BigZ</h1>
            <i class="fa-solid fa-person-swimming"></i>
            <form>
                <FormGroup legenda="email" valor="Enter email"/>
                <FormGroup legenda="password" valor="Enter password" />
                <Botao tipo="submit" />
            </form>
        </div>
        <footer>
            <p><b>Não possui conta? <a href="#">Cadastro</a></b></p>
        </footer>
    </div>
)

export default Login