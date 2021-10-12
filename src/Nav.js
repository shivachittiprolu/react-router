import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
    return (
        <div>
            <nav >
                <ul className ="nav-links">
                    <Link to = "/">
                        <li className="logo">Shop</li>
                    </Link>
                    <div class="nav-links-right">
                        <Link to = "/about">
                            <li className="nav-link">About</li>
                        </Link>
                        <Link to = "/contact-us">
                            <li className="nav-link" >Contact</li>
                        </Link>
                    </div>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav
