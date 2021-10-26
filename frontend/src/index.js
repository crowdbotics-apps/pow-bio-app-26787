import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./main.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import contactUsApiReducer from './Redux/reducers/contactUs';
import contactUsRootSaga from './Redux/sagas/contactUs';
import loginApiReducer from './Redux/reducers/login';
import loginRootSaga from './Redux/sagas/login';

const sagaMiddleware = createSagaMiddleware();

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token']
}

const store = createStore(combineReducers({
  auth: persistReducer(authPersistConfig, loginApiReducer),
  contactUs: contactUsApiReducer,
}),
  applyMiddleware(sagaMiddleware)
);

let persistor = persistStore(store);

sagaMiddleware.run(contactUsRootSaga);
sagaMiddleware.run(loginRootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
