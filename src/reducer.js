import { combineReducers } from 'redux';
import productListReducer from './modules/ProductList/reducer.js';

export default combineReducers({
  productListModule: productListReducer,
});