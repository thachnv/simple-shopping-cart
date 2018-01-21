import React, { Component } from 'react';
import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  render() {
    if (!this.props.shoppingCart) {
      return <div>Cart is empty</div>;
    }
    return (
      <div className="shopping-cart-wrapper">
        <h4>Your shopping cart</h4>
        {this.props.shoppingCart.map(cartItem => (
          <div className="shopping-cart-item" key={cartItem.product.id}>
            <div className="shopping-cart-product-remove">
              <button
                onClick={() =>
                  this.props.removeFromShoppingCart(cartItem.product.id)
                }
              >
                X
              </button>
            </div>
            <div className="shopping-cart-product-name">
              {cartItem.product.product_name}
            </div>
            <div className="shopping-cart-product-amount">
              <button
                onClick={() =>
                  this.props.addToShoppingCart(cartItem.product, -1)
                }
              >
                -
              </button>{' '}
              {cartItem.amount}{' '}
              <button
                onClick={() =>
                  this.props.addToShoppingCart(cartItem.product, 1)
                }
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
