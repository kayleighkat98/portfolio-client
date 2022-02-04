import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return(
      <div className="notFound">
        <h2>404 - Page not found</h2>
        <p>Uh Oh! Looks like you've ventured off the path. Press the back
          button in your browser!</p> 
      </div>
    );
  }
}

export default NotFound
