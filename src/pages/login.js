import React, { Component } from 'react';
import { postLogin } from '../api';
import Button from '../components/button/button'
import { AppContext } from '../context'
import { Redirect } from 'react-router-dom'

import { MOCK, MOCK_TOKEN } from '../mocks'

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    erro: false,
    message: 'Usuário ou senha não confere.',
  };

  handleInputChange = event => {
    const target = event.target;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event, context) => {
    const { email, password } = this.state;

    if (email === '' || password === '') {
      this.setState({erro: true})
      event.preventDefault()
      return false
    }

    this.setState({loading: true})
    const params = { email, password };

    if (MOCK) {
      var expiration = new Date();
      expiration.setDate(expiration.getDate() + 1);
      sessionStorage.setItem('accounts_token', MOCK_TOKEN);
      context.state.login();
      return this.props.history.push('/acompanhe')
    }

    postLogin(params)
      .then(({ data }) => {
        if(data.success) {
          var expiration = new Date();
          expiration.setDate(expiration.getDate() + 1);
          sessionStorage.setItem('accounts_token', data.token);
          context.state.login();
          this.props.history.push('/acompanhe')
        } else {
          this.setState({erro: true, loading: false});
        }
      })
      .catch((error) => {
        this.setState({ erro: true, message: 'Erro ao autenticar, tente novamente mais tarde', loading: false});
        console.error(error);
      })
    event.preventDefault();
  }

  renderContent = (context) => {
    const { erro, message, loading } = this.state;

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if(context.state.authenticated) {
      return <Redirect to={from} />
    }
    return (
      <div className="text-center login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4">
              <form className="form-signin" onSubmit={(e)=> this.handleSubmit(e, context)}>
                <div className="form-group">
                  <label className="sr-only">Email address</label>
                  <input
                    name='email'
                    type="email"
                    placeholder="E-mail"
                    className="form-control form-control-lg"
                    onChange={this.handleInputChange}
                    required=""
                  />
                  <label className="sr-only ">Password</label>
                  <input
                    name='password'
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Senha"
                    onChange={this.handleInputChange}
                    required=""
                  />
                  { erro && <div className='alert alert-danger' role='alert'> { message } </div> }
                  <Button
                    className="btn btn-lg btn-success btn-block"
                    text="Entrar"
                    loadingText="Autenticando..."
                    loading={loading}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          this.renderContent(context)
        )}
      </AppContext.Consumer>
    )
  }
}

export default Login;
