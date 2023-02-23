import React from "react";
import './botao.css'

const Botao = props => (
    <button type={props.tipo}>{props.tipo}</button>
)

export default Botao