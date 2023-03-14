import React from "react";
import './botao.css'

const Botao = props => (
    <button className="envio" type={props.tipo}>{props.tipo}</button>
)

export default Botao