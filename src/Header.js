import React, { Component } from 'react';
import Modal from './components/Modal.js';
import ShoppingCart from './modules/ShoppingCart';

export default class Header extends Component {
  showCart = () => {
    this.cartModal.show();
  };
  render() {
    return (
      <div className="App-header">
        <div onClick={this.showCart}>Open cart</div>
        <Modal ref={r => (this.cartModal = r)}>
          <ShoppingCart />
        </Modal>
      </div>
    );
  }
}
