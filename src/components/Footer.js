import React, { Component } from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import '../styles/dist/footer.css'

class Footer extends Component {

    render() {
        return(
            <div className='footer'>
                <a href="https://github.com/kayleighkat98" rel='noreferrer' target="_blank"><AiFillGithub className ='icon github'/>Github</a>

                <a href="https://www.linkedin.com/in/kayleigh-young-064191ab/" rel='noreferrer' target="_blank"><AiFillLinkedin className='icon linked-in'/>Linked-in</a>

                <a href="mailto:kyoung.communications@gmail.com" rel='noreferrer' target="_blank"><AiOutlineMail className='icon email'/>E-Mail</a>
            </div>
        );
    }
}

export default Footer