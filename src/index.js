import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';
import './products.json';
import 'font-awesome/css/font-awesome.css';

import { loadShoppingCart } from './modules/ShoppingCart/actions.js';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(loadShoppingCart());
let currentShoppingCart;
store.subscribe(() => {
  const previousShoppingCart = currentShoppingCart;
  currentShoppingCart = store.getState().shoppingCartModule.shoppingCart;
  if (previousShoppingCart !== currentShoppingCart) {
    localStorage.setItem('shoppingCart', JSON.stringify(currentShoppingCart));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
