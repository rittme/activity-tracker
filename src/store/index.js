import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import { createStore } from 'redux'
import { activities } from '../reducers';

const config = {
  key: 'root',
  storage,
};

const rootReducer = persistCombineReducers(config, {activities});

function configureStore () {
  let store = createStore(rootReducer)
  let persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore;
