import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/index'

import App from './App';
import './index.css';

const store = configureStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);