import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
               <header>
                    <div>
                        <a>
                            <img/>
                        </a>
                    </div>
                    <ul className="nav-link-box">
                        <li className="nav-link">Services</li>
                        <li className="nav-link">Portfolio</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Team</li>
                        <li className="nav-link">contact</li>
                    </ul>
                 </header> 
         </div>
        )
    }
}

export default Header
