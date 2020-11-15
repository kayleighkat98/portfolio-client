import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return(
            <div className='container'>
                <h2>Contact Kayleigh</h2>
			<div className="cont">
				<p>I am available for hire for both contract work and full time positions</p>

				<a href="https://github.com/kayleighkat98" rel='noreferrer' target="_blank">GitHub</a>

				<a href="https://www.linkedin.com/in/kayleigh-young-064191ab/" rel='noreferrer' target="_blank">LinkedIn</a>

				<a href="mailto:kyoung.communications@gmail.com" rel='noreferrer' target="_blank">Email Me</a>


				<div className="item">
					<form action="https://formspree.io/moqknbgv" target="_blank" method="POST">
						<label htmlFor="user-name"></label>
						<input id="user-name" type="text" name="name" placeholder="*Name"/>
						<label>
							<input type="text" name="_replyto" placeholder="*Email" required/>
						</label>
						<label>
							<textarea name="message" placeholder="*Message" required></textarea>
						</label>

						<button type="submit">Send</button>
					</form>
					<iframe
						title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429176.3306906786!2d-97.01173099781205!3d32.820352497037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1588618332011!5m2!1sen!2sus">
					</iframe>
				</div>
			</div>
            </div>
        );
    };
};

export default Contact;