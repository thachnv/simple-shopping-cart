import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart.js';
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from '../ShoppingCart/actions.js';

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCartModule.shoppingCart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: (product, amount) =>
      dispatch(addToShoppingCart(product, amount)),
    removeFromShoppingCart: productId =>
      dispatch(removeFromShoppingCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
