import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from "../views/Paginas/Home"
import About from "../views/Paginas/About"
import Login from "../views/Paginas/Login"
import NotFound from "../views/Paginas/Not_found"

const Conteudo = props => (
    <main className='content'>
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' exact element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Conteudo