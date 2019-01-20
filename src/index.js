import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';
import { fetchReport } from './actions';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchReport())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
