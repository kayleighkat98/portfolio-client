import React, { Component } from 'react';
import avatar from '../store/images/avatar.png'

class Landing extends Component {
    render() {
        return(
            <div id='landing' className='container landing'>
               <h2 className='slogan'>Get better than you ask for.</h2>
               <img className='avatar' src={avatar} alt='avatar' />
            </div>
        );
    };
};

export default Landing;