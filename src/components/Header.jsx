import React from 'react'

import "../styles/Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav>
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Header
