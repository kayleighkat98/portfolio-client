import React, { Component } from 'react';
import avatar from '../store/images/avatar.png'

class Landing extends Component {
    render() {
        return(
            <div className='container landing'>
               <h2>Get better than you ask for.</h2>
               <img className='avatar' src={avatar} alt='avatar' />
               <nav>
                    <h2>Bio...</h2>
                    <h2>Projects...</h2>
                    <h2>Contact...</h2>
		        </nav>
            </div>
        );
    };
};

export default Landing;