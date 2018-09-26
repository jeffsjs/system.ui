import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.css'
import './main/dependencies'

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
