import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'
import UserContext from '../contexts/user-context'


class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm login-form form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className="form-line">
          <label htmlFor='login-username-input'>
            Username
          </label>
          <input
            id='login-username-input'
            name='username'
            required
          />
        </div>
        <div className="form-line">
          <label htmlFor='login-password-input'>
            Password
          </label>
          <input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <div className="form-line">
          <button type='submit'>
            Login
          </button>
        </div>

      </form>
    )
  }
}

export default LoginForm
