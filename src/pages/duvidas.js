import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import { AppContext } from '../context'

class Duvidas extends Component {
  renderContent = (context) => {
    const info = { ...context.state.agencyInformations }
    return (
      <Fragment>
        <Header title={info.name} />
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className='container-text'>
              <h4>Lorem</h4>
              <ul>
                <li>Ipsum:</li>
                <ul>
                  <li>Proin congue risus vel elit bibendum, eget facilisis dui rhoncus.</li>
                  <li>Duis sodales tortor eget odio accumsan, eget malesuada mi convallis.</li>
                  <li>Fusce fermentum sapien a sodales mollis.</li>
                  <li>Quisque quis mauris et libero auctor pellentesque eu fringilla dolor.</li>
                </ul>
              </ul>

              <h4>Integer</h4>
              <ol>
                <li><span className='text-important'>*</span>Duis volutpat ante nec neque dapibus, eu dictum ante consequat.</li>
                <li>Integer vitae ex dictum, consequat ex vitae, ultrices tortor.</li>
                <li>In nec mi porta, elementum libero sit amet, lacinia risus.</li>
                <li>Vestibulum varius ex nec orci lacinia tincidunt.</li>
                <li>Integer varius purus quis ex ornare rhoncus.</li>
                <li>Donec at lorem accumsan, vulputate risus id, lobortis dui.</li>
              </ol>

              <p className='text-danger'><b className='text-important'>*</b> Vestibulum non sem sit amet diam varius eleifend nec eu ante.</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => this.renderContent(context)}
      </AppContext.Consumer>
    )
  }
}

export default Duvidas;
