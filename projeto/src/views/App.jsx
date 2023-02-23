import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../componentes/menu'
import Conteudo from '../componentes/content'

const App = props => (
    <div className='App'>
        <BrowserRouter>
            <Menu />
            <Conteudo />
        </BrowserRouter>
    </div>
)

export default App