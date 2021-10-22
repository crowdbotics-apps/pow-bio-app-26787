import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./main.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import contactUsApiReducer from './Redux/reducers/contactUs';
import contactUsRootSaga from './Redux/sagas/contactUs';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({
  contactUs: contactUsApiReducer,
}),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(contactUsRootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
