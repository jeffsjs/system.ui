import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import './modal.css';

const Modal = ({ buttons, id, icon, title, text, fullScreen, size, showModal, onRequestClose, centered, children }) => {
  const { body: { classList }, documentElement: { scrollHeight, clientHeight } } = document;

  const handleAfterOpen = () => {
    if (showModal && !classList.contains('hasScrollbar') && (scrollHeight > clientHeight))
      classList.add('hasScrollbar');
  }

  if (!showModal && classList.contains('hasScrollbar'))
    classList.remove('hasScrollbar');

  return (
    <ReactModal
      isOpen={showModal}
      className={`react-modal modal-default modal-dialog ${size ? 'modal-' + size : ''} ${centered ? 'modal-dialog-centered' : ''}`}
      overlayClassName={`modal-overlay ${fullScreen ? 'modal-fullscreen' : ''}`}
      tabIndex='-1'
      role='dialog'
      onAfterOpen={handleAfterOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      aria={{
        labelledby: `${id}Label`,
        hidden: true
      }}
    >
      <div className='modal-content'>
        <div className='modal-body'>
          <button type='button' className='close' onClick={onRequestClose}>
            <span aria-hidden='true'>&times;</span>
          </button>
          {
            icon &&
            <i className={`modal-default-ing ${icon}`} />
          }
          {
            title &&
            <h4>{title}</h4>
          }
          {
            text &&
            <p>{text}</p>
          }
          {
            children
          }
          {
            buttons.length > 0 && (
              <div className='modal-body-footer'>
                {
                  buttons.map((button, index) => (
                    <button
                      key={index}
                      type='button'
                      className={`btn ${button.className || 'btn-light'}`}
                      onClick={button.action}
                    >
                      {
                        button.label
                      }
                    </button>
                  ))
                }
              </div>
            )}
        </div>
      </div>
    </ReactModal>
  )
}

Modal.defaultProps = {
  title: '',
  text: '',
  size: '',
  fullScreen: false,
  buttons: [],
  centered: true
}

Modal.propTypes = {
  /** Id reference to open modal */
  id: PropTypes.string.isRequired,
  /** Header title */
  title: PropTypes.string,
  /** Header title */
  icon: PropTypes.string,
  /** Inner text */
  text: PropTypes.string,
  /** Modal size */
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  /** Modal in full screen mode */
  fullScreen: PropTypes.bool,
  /** Modal is center mode */
  centered: PropTypes.bool,
  /** Action buttons */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    action: PropTypes.func
  })),
  showModal: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

ReactModal.setAppElement(document.body);

export default Modal;