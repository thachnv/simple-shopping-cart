import { combineReducers } from 'redux';
import productListReducer from './modules/ProductList/reducer.js';
import shoppingCartReducer from './modules/ShoppingCart/reducer.js';

export default combineReducers({
  productListModule: productListReducer,
  shoppingCartModule: shoppingCartReducer,
});