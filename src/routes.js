import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { AppContext } from './context'
import { getUserStatus } from './api'
import config from './config'

import App from './app'
import Login from './pages/login'
import Acompanhe from './pages/acompanhe'
import Duvidas from './pages/duvidas'
import NotFound from './404/404'


import { MOCK, MOCK_STATUS } from './mocks'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <AppContext.Consumer>
  {(context)=> (
    <Route {...rest} render={(props) => (
      context.state.authenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )} />
  )}
  </AppContext.Consumer>
)

class Routes extends Component {
  state = {
    authenticated: false,
    agencyInformations: {
      name: '',
    },
    login: ()=> {
      this.state.getUserStatus()
    },
    logout: ()=> {
      sessionStorage.removeItem('accounts_token');
      this.setState({ authenticated: false });
    },
    getUserStatus: () => {

      if (MOCK)
        return this.setState({ agencyInformations: MOCK_STATUS, authenticated: true })

      getUserStatus()
      .then(({ data }) => {
        this.setState({ agencyInformations: data, authenticated: true })
      })
      .catch((error) => {
        console.log(error)
        if (!error.response || (error.response.status === 401 || error.response.status === 403)) {
          this.state.logout()
        }
      })
    }
  }
  componentDidMount() {
    if (config.authToken) {
      this.state.getUserStatus()
    }
  }

  render() {
    return (
      <AppContext.Provider value={{state: this.state }}>
        <App>
          <Router>
            <Switch>
              <Route exact path='/login' component={Login} />

              <PrivateRoute path='/acompanhe' component={Acompanhe} />
              <PrivateRoute path='/duvidas' component={Duvidas} />

              <Route path='/404' component={NotFound} />
              <Redirect from='/' to='/acompanhe' />
              <Redirect from='*' to='/404' />

            </Switch>
          </Router>
        </App>
      </AppContext.Provider>
    )
  }
}

export default Routes;
