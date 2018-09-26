import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const ToastItem = ({ type, title, message, onClick, icon }) => {
  if (!icon) {
    if (type === 'success')
      icon = 'ing ing-thumb-up-o color-blue';
    else if (type === 'info')
      icon = 'ing ing-exclamation-circle color-ocean';
    else if (type === 'error')
      icon = 'ing ing-sad-o color-red';
    else if (type === 'warning')
      icon = 'ing ing-exclamation-triangle color-brown';
  }

  return (
    <div className="d-flex align-items-center main-box" onClick={onClick}>
      {icon && <i className={icon} />}
      <div className="col p-0">
        {
          title &&
          <h1 className="mx-0 mb-2">
            {title}
          </h1>
        }
        {
          message &&
          <p className="m-0">
            {message}
          </p>
        }
      </div>
    </div>
  )
}

ToastItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
}

const success = ({ title, message, onClick, icon, ...options }) => {
  toast.success(<ToastItem type='success' {...{ title, message, onClick, icon }} />, { className: 'color-blue bordercolor-blue p-0 bx-shad', ...options });
}

const error = ({ title, message, onClick, icon, ...options }) => {
  toast.info(<ToastItem type='error' {...{ title, message, onClick, icon }} />, { className: 'color-red bordercolor-red p-0 bx-shad', ...options });
}

const warning = ({ title, message, onClick, icon, ...options }) => {
  toast.warn(<ToastItem type='warning' {...{ title, message, onClick, icon }} />, { className: 'color-brown bordercolor-brown p-0 bx-shad', ...options });
}

const info = ({ title, message, onClick, icon, ...options }) => {
  toast.error(<ToastItem type='info' {...{ title, message, onClick, icon }} />, { className: 'color-ocean bordercolor-ocean p-0 bx-shad', ...options });
}

const customBlack = ({ title, message, onClick, icon, ...options }) => {
  toast.error(<ToastItem {...{ title, message, onClick, icon }} />, { className: 'p-1 bx-shad custom-black text-center', ...options });
}

const Toast = {
  success,
  error,
  warning,
  info,
  customBlack
}

export default Toast;
