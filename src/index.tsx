import React from 'react';
import { Provider } from 'react-redux';
import './css/style.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/store';
import { fetchUsers } from 'store/data/api-actions';
import App from './components/app/app';

store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
