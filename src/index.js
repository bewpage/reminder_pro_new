import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducer);

const portalDiv = document?.getElementById('root');
const root = ReactDOM.createRoot(portalDiv);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
