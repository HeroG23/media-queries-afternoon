import React from 'react'
import logo from "../navbar-logo.svg"

function Header(){
        return (
            <header className='welcome-header'>
                <div className="logo-menu-box">
                    <a href="https://localhost:3000">
                        <img className='logo-svg' src={logo} alt=""/>
                    </a>
                    <button className="menu-button-mobile">Menu &#9776;</button>
                </div>
                <ul className="nav-link-box">
                    <li className="nav-link">SERVICE</li>
                    <li className="nav-link">PORTFOLIO</li>
                    <li className="nav-link">ABOUT</li>
                    <li className="nav-link">TEAM</li>
                    <li className="nav-link">CONTACT</li>
                </ul>
            </header> 
        )
}

export default Header
