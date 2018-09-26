import React from 'react';
import { style, ToastContainer as Container } from 'react-toastify';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

import './toast.css';

const CloseButton = ({ closeToast }) => (
  <i
    className="ing ing-close"
    onClick={closeToast}
  />
);

const FadeInAndOut = ({ children, ...props }) => (
  <Transition
    {...props}
    timeout={700}
    onEnter={node => node.classList.add('fadeIn', 'toaster-animate')}
    onExit={node => {
      node.classList.remove('fadeIn', 'toaster-animate');
      node.classList.add('fadeOut', 'toaster-animate');
    }}
  >
    {children}
  </Transition>
);

const ToastContainer = () => {
  style({
    colorDefault: "#fff",
    colorInfo: "#fff",
    colorSuccess: "#fff",
    colorWarning: "#fff",
    colorError: "#fff",
    colorProgressDefault: "linear-gradient(to right, #00a2c2, #00a2c2, #30a2b9, #4cb7cc, #47cce6, #66cee2)"
  });

  return (
    <Container
      hideProgressBar
      transition={FadeInAndOut}
      className="toaster-container toaster-animate"
      closeButton={<CloseButton />}
    />
  )
};

CloseButton.propTypes = {
  closeToast: PropTypes.func
}

FadeInAndOut.propTypes = {
  children: PropTypes.element
}

export default ToastContainer;
