import React, { Component } from 'react';
import avatar from '../store/images/avatar.png'

class Landing extends Component {
    render() {
        return(
            <div className='container landing'>
               <h1>Landing</h1>
               <img className='avatar' src={avatar} alt='avatar' />
            </div>
        );
    };
};

export default Landing;