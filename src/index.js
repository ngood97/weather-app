import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import {Provider} from 'react-redux'

import App from './components/App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
