import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
 
    <React.StrictMode>
      <App />
    </React.StrictMode>
 ,
  document.getElementById('root')
);
