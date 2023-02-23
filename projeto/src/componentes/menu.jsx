import './menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <div className='navbar'>
        <h1 className='titulo'>BigZ</h1>
        <ul className="nav">
            <li><Link to = "/"><i class="fa-solid fa-house"></i><b> Home</b></Link></li>
            <li><Link to = "/about"><i class="fa-solid fa-comment"></i><b> About</b></Link></li>
            <li><Link to = "/login"><i class="fa-solid fa-user"></i><b> Login</b></Link></li>
        </ul>
    </div>
)

export default Menu