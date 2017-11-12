import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import App from './components/App.jsx';
import styles from './style/main.scss';
import configureStore from './store'

const { persistor, store } = configureStore()

render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
