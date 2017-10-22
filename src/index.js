import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import styles from './style/main.scss';
import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
