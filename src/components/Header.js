import React, { Component } from 'react';
import '../styles/dist/header.css'

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='header-name'>
                    Kayleigh Young
                </div>
                <div className='header-posit'>
                    Web Developer
                </div>
            </div>
        );
    }
}

export default Header