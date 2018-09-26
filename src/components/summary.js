import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip'

class Summary extends Component {
  renderContent = () => {
    const { hasError, summaryItens } = this.props;
    if (hasError) {
      return <div>Erro!!!</div>
    }
    if (!summaryItens.propertiesArchives) {
      return <div className='spinner-horizontal'> <div className='loader color-blue'></div> </div>
    }

    return (
      <Fragment>
        {Object.entries(summaryItens).map(([key, item]) => {
          return (
            <div className={`summary-item ${item.color} ${(item.accepted) ? 'accepted' : ''}`} key={key} id={key}>
              <i className={`ing ${item.icon}`} />
              <div className='summary-info d-flex flex-column align-items-center justify-content-center'>
                {!!item.accepted && (
                  <span className='summary-accepted' id={key} data-tip='Aprovados'>
                    {(item.accepted).toLocaleString()}
                  </span>
                )}
                <span className='summary-total' id={key} data-tip='Recebidos'>
                {!!item.accepted && (
                  <small>de</small>
                )} {(item.total).toLocaleString()}
                </span>
              </div>
              <small className='summary-name d-flex align-items-center justify-content-center'>
                {item.nome}
              </small>
            </div>
          )
        })
      }
      <ReactTooltip place='bottom' type='dark' effect='solid' />
    </Fragment>
    )
  }

  render() {
    return (
      <div className='jumbotron summary'>
        <div className='container text-center'>
          <h2>Total de dados registrados</h2>
          <div className='d-flex justify-content-center align-self-stretch text-center row'>
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}


export { Summary };
