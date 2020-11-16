import React, { Component } from 'react';
import '../styles/dist/header.css'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='logo'>
                    <div className='header-name'>
                        Kayleigh Young
                    </div>
                    <div className='header-posit'>
                        Web Developer
                    </div>
                </div>
                <nav>
                    <a href="#landing">Home</a>
                    <a href="#bio">Bio</a>
                    <a href="#contact">Contact</a>
                    <a href="#projects">Projects</a>
		        </nav>
            </div>
        );
    }
}

export default Header