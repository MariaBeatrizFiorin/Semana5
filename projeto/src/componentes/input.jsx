import React from "react";
import './input.css'

const FormGroup = props => (
    <div className="form-group">
        <label for = {props.legenda} ></label>
        <input type={props.legenda} name={props.legenda} id={props.legenda} placeholder={props.valor}/>
    </div>
)

export default FormGroup