import React from 'react';
import './button.css';

const Button = ({ text, loadingText, className, disabled, loading, ...props }) => {
  const isDisabled = disabled || loading;

  loadingText = loadingText || text
  text = loading ? loadingText : text

  return (
    <button {...props} className={['btn btn-primary', className].join(' ')} disabled={isDisabled}>
      {loading &&
        <span className='spinner-circle spinner-sm'>
          <span className='loader' />
        </span>
      }
      {text}
    </button>
  )
}

export default Button;