import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navbar">
            
            <nav>
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/contact'>contact</Link>
                <Link to='/profile'>profile</Link>
                <Link to= '/addUser'>Add new user</Link>
            </nav>
        </div>
    )
}

export default Nav
