import React, { Component } from 'react';
import Button from './button/button'
import Modal from './modal/modal'
import { translateProp } from '../utils'
import { postStatus } from '../api';
import Toast from './toast/toast';

import { MOCK, MOCK_STATUS } from '../mocks'

const statusIds = status => {
  const ids = {
    analysis_finished: {
      idConfirm: 1,
      idCancel: 3
    },
    homologation_finished: {
      idConfirm: 2,
      idCancel: 4
    }
  }
  return ids[status] || 0;
}

class Status extends Component {
  state = {
    status: null,
    message: null,
    titleMessage: '',
    messageCancelar: 'Realmente deseja cancelar?',
    button: false,
    modal: false,
    modalMessage: '',
    modalCancelar: false,
  }

  componentDidMount() {
    const { info } = this.props;
    this.setState({ status: info.status, message: info.text, button: info.post });
  }

  openModal = modalCancelar => {
    const { message, messageCancelar } = this.state;
    const newState = modalCancelar ?
    { modal: true, titleMessage: 'Aviso!', modalMessage: messageCancelar, modalCancelar  } :
    { modal: true, titleMessage: 'Você tem certeza?', modalMessage: message, modalCancelar };
    this.setState({ ...newState });
  }

  onCloseModal = () => {
    this.setState({ modal: false });
  }

  handlerPostStatus = idStatus => {
    if (MOCK)
      return this.setState({status: MOCK_STATUS.status, button: false })

    postStatus(idStatus)
    .then(({ data }) => {
      let message = `${idStatus<=2 ? 'Confirmação enviada!' : 'Cancelamento enviado!'}`;
      Toast.success({ message });
      const statusId = {
        2: 'homologation_begin',
        4: 'production_begin',
        6: 'analysis_refused',
        7: 'homologation_refused'
      }
      this.setState({status: statusId[data.migration_status_id], button: false })
    })
    .catch((error) => {
      Toast.error({ message: 'Erro ao enviar confimação' });
    })
  }

  actionModal = id => {
    this.handlerPostStatus(id);
    this.setState({ modal: false });
  }

  renderContent = () => {
    const { modal, status, titleMessage, modalMessage, button, modalCancelar } = this.state;
    const { idConfirm, idCancel } = statusIds(status);
    const idAction = modalCancelar ? idCancel : idConfirm;
    return (
      <div className='container align-self-center'>
        <h4>{translateProp(status)}
        </h4>
        {button && <span className='ml-3'>
          <Button
          className="btn-default btn-success btn-sm mx-2"
          text="Confirmar"
          onClick={() => this.openModal()}
          loadingText="Carregando..."
          loading={false}
          disabled={false}
          />
          <Button
            className="btn-default btn-danger btn-sm mx-2"
            text="Cancelar"
            onClick={() => this.openModal(true)}
            loadingText="Carregando..."
            loading={false}
            disabled={false}
            />
          </span>
        }

        <Modal
          showModal={modal}
          onRequestClose={this.onCloseModal}
          id="statusModal"
          icon="5"
          title={titleMessage}
          text={modalMessage}
          buttons={[ { label: "CONFIRMAR", className: "btn-success", action: () => this.actionModal(idAction)  },
          { label: "CANCELAR", className: "btn-danger", action: this.onCloseModal }]}
      />
      </div>
    )
  }

  render() {
    return (
      <div className="status d-flex justify-content-center align-self-center">
        {this.renderContent()}
      </div>
    )
  }
}


export { Status };
