import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { DEFAULT_STATE } from './reducers';
//import './index.css';
import App from './App';

const store = createStore(rootReducer, DEFAULT_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

