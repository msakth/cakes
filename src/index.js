import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render(
    <Routes store={store} />,
    document.getElementById('root')
  )
