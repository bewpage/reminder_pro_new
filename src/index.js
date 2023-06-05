import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from './components/App';

import './index.css';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);
