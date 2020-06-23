import React from 'react';
import { NavLink } from 'react-router-dom'

import './index.css'
const NavLinks = () => {
    return(
        <nav>
            <NavLink exact activeClassName="active" to="/">Login</NavLink>
        </nav>
    )
}

export default NavLinks