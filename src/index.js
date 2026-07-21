import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

import './index.css';
import App from './App';
import rootReducer from './modules';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const root = createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);