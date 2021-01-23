import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/create'
    history.push(destination)
  }

  render() {
    return (
      <section className='login'>
        <h2 className="login-header">Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default Login
