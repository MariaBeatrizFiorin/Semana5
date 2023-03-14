import React, { useState } from "react";
import './About.css'
import prancha1 from "../../img/5.11.jpg"
import prancha2 from "../../img/evolution.jpg"
import prancha3 from "../../img/tokoro.jpg"

const About = props => {
    const [imagem, setImagem] = useState(0)
    const img = [prancha2, prancha1, prancha3]
    console.log(typeof img, img.length - 1)
    const prevImg = () => { setImagem((imagem === 0) ? (img.length - 1) : (imagem - 1)) }
    const nextImg = () => { setImagem((imagem === img.length - 1) ? 0 : (imagem + 1)) }

    return (
        <div className="About">
            <h1>Escolha sua prancha preferida</h1>
            <div className="prancha">
                <button onClick={prevImg}>Prev</button>
                <img src={img[imagem]} />
                <button onClick={nextImg}>Next</button>
            </div>
        </div>
    )
}

export default About