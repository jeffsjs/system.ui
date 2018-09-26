import React, { Component } from 'react';
import { getProperties } from '../../api';
import { translateProp } from '../../utils'
import { Widget, WidgetContainer, WidgetItem } from './';

import { MOCK, MOCK_PROPERTIES } from '../../mocks';

class WidgetProperties extends Component {
  state = {
    properties: null,
    download: null,
    hasError: false,
    limit: 15
  }

  componentDidMount() {

    if (MOCK)
      return this.setState({ properties:  { ...MOCK_PROPERTIES.properties }, download: {...MOCK_PROPERTIES.download} });

    getProperties()
      .then(({ data }) => {
        this.setState({ properties:  { ...data.properties }, download: {...data.download} });
      })
      .catch((error) => {
        this.setState({ hasError: true });
        console.error(error);
      })
  }

  onLoadItens = (type) => {
    if (type==='down') {
      this.setState({ limit: this.state.limit + 15 })
    } else {
      this.setState({ limit: 15 })
    }
  }

  renderContent = () => {

    if (this.state.hasError) {
      return <div>Erro!!!</div>
    }

    if (!this.state.properties) {
      return <div className='spinner-horizontal'> <div className='loader color-blue'></div> </div>
    }

    const maxIten = Object.keys(this.state.properties).length;
    const loadMore = this.state.limit <= maxIten - 1 ? 'down' : 'up';

    return (
      <WidgetContainer>
        {
          Object.entries(this.state.properties).slice(0,this.state.limit).map(([key, value]) => {
            return (
              <WidgetItem key={key} id={key} name={translateProp(key)} value={value} download={this.state.download[key]} cols='col-sm-6 col-md-4' />
            )
          }
          )
        }
        {
          ((maxIten > 5) &&
          <div className="col-12">
              <div className="row justify-content-end">
                <div className="col-auto px-3">
                  <a className="btn btn-custom btn-sm" onClick={() => this.onLoadItens(loadMore)}>
                  {`${loadMore==='down'?'Mais':'Menos'} informações `}
                  <i className={`ing ing-chevron-${loadMore}`}></i></a>
                </div>
              </div>
            </div>
          )
        }
      </WidgetContainer>
    )
  }

  render() {
    return (
      <Widget title='Imóveis' icon='ing-home'>
        {this.renderContent()}
      </Widget>
    )
  }
}

export { WidgetProperties };
