import React, {useState} from "react";
import './Home.css';
import prainha from "../../img/prainha.jpg"
import madeiro from "../../img/madeiro.jpg"
import itamambuca from "../../img/itamambuca.jpg"

const Home = props => {
    const praias = [
        {nome: "Prainha, Rio de Janeiro", imagem: prainha},
        {nome: "Praia do madeiro, Pipa", imagem: madeiro},
        {nome: "Praia de itamambuca, Ubatuba", imagem: itamambuca}
    ]
    const [back, setBack] = useState(0)
    function mudarPraia (){
        let counter = back + 1
        if (counter > 2) counter = 0
        setBack(counter)
    }
    return(
        <div className="Home" style={{backgroundImage: `url(${praias[back].imagem})`, backgroundPosition: "center", backgroundSize:"cover"}}>
            <div className="praia">{praias[back].nome}</div>
            <button className="btn" onClick={() => mudarPraia()}>Conheça as melhores praias de surf!</button>
        </div>
    )
}

export default Home