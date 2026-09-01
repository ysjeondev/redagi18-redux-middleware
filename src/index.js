import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  applyMiddleware,
  createStore,
} from 'redux';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import rootReducer, { rootSaga } from './modules';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
      sagaMiddleware
    )
  )
);

// Saga 실행
sagaMiddleware.run(rootSaga);

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