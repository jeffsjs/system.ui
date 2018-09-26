import React from 'react';

const WidgetContainer = ({ children })=> {
  return (

    <ul className="list-group list-group-flush">
      <div className="row">
        {children}
      </div>
    </ul>

  )
}

export { WidgetContainer };
