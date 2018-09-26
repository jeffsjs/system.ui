import React from 'react';

const Widget = ({ children, icon, title })=> {
  return (
    <div className="card">
      <div className="card-header"><i className={`ing ${icon} mr-2`}></i> <span className='align-middle'>{title}</span></div>
      {children}
    </div>
  )
}

export {Widget};
