import React, { Component } from 'react';
import { getCustomers } from '../../api';
import { translateProp } from '../../utils'
import { Widget, WidgetContainer, WidgetItem } from './';

import { MOCK, MOCK_CUSTOMERS } from '../../mocks';


class WidgetCustomers extends Component {
  constructor(props) {
    super(props);

    this.onLoadItens = this.onLoadItens.bind(this);
  }

  state = {
    customers: null,
    hasError: false,
    limit: 5
  }

  componentDidMount() {
    if (MOCK)
      return this.setState({ customers: { ...MOCK_CUSTOMERS.customers } });

    getCustomers()
      .then(({ data }) => {
        this.setState({ customers: { ...data.customers } });
      })
      .catch((error) => {
        this.setState({ hasError: true });
        console.error(error);
      })
  }

  onLoadItens = (type) => {
    if (type === 'down') {
      this.setState({ limit: this.state.limit + 5 })
    } else {
      this.setState({ limit: 5 })
    }
  }


  renderContent = () => {
    if (this.state.hasError) {
      return <div>Erro!!!</div>
    }

    if (!this.state.customers) {
      return <div className='spinner-horizontal'> <div className='loader color-blue'></div> </div>
    }

    const maxIten = Object.keys(this.state.customers).length;
    const loadMore = this.state.limit <= maxIten - 1 ? 'down' : 'up';

    return (
      <WidgetContainer>
        {
          Object.entries(this.state.customers).slice(0, this.state.limit).map(([key, value]) =>
            <WidgetItem key={key} id={key} name={translateProp(key)} value={value} />
          )
        }
        {
          ((maxIten > 5) &&
            <div className="col-12">
              <div className="row justify-content-end">
                <div className="col-auto px-3">
                  <a className="btn btn-custom btn-sm" onClick={() => this.onLoadItens(loadMore)}>
                    {`${loadMore === 'down' ? 'Mais' : 'Menos'} informações `}
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
      <Widget title='Clientes' icon='ing-user'>
        {this.renderContent()}
      </Widget>
    )
  }
}

export { WidgetCustomers };
