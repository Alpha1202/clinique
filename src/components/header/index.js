import React from 'react'

import NavLinks from '../navlinks'
import './index.css';

const Header = () => {
  return (
    <div className="header">
        <div className='logo'>
        <h3>Clinique</h3>
        </div>
     
        <div className='navlinks'>
        <NavLinks />
        </div>
     
    </div>
  )
}

export default Header
