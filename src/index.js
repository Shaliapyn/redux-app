import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import './index.css';
import App from './App';
import { allReducers } from "./components/store/reducers";



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(allReducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


