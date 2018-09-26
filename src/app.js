import React, { Component } from 'react';
import ToastContainer from './components/toast/toast-container'
import { detectDevice } from './utils'

class App extends Component {
  render() {
    return (
      <div className={detectDevice()}>
        {this.props.children}
        <ToastContainer/>
      </div>
    )
  }
}
export default App;
