import React, { Component } from 'react'

class Bio extends Component {

    render() {
        return(
            <div className='bio container'>
                <div id='bio' className='anchor'/>
               <h1 >About me</h1>
                <p><b>
                    You are so lucky to have found me. 
                    Chances are, your life just got a little bit better. 
                    Hi, I'm Kayleigh Young, a full-stack web-developer based in Dallas, Texas.
                    </b>
                </p>
                <br/>
                <p>
                    If you need an excited engineer who can pick up on new concepts in the drop of a hat, or a cool coder who thinks outside the box- congratulations, your life just got better.
                    I am one of those people who "just gets it" when it comes to programing.
                    Don't take my word for it? Look at what I've done so far.
                </p>
                <br/>
                <p>
                    What I've done is minute compared to what's to come because even in my free-time, I am improving.
                    I enjoy travelling and meeting new people, broadening my idea of what consumers need.
                    When my slobber-faced dog is behaving, I enjoy taking him to elderly homes to comfort the residents. 
                    But no matter where I am, I'm brainstorming ways to improve any unfinished business I might have.
                </p>
            </div>
        );
    }
}

export default Bio