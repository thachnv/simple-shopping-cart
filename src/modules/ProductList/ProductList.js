import React, { Component } from 'react';
import ProductItem from './ProductItem.js';

export default class ProductList extends Component {
  componentWillMount() {
    this.props.loadProductList();
  }
  render() {
    if (!this.props.productList) return <div>Loading...</div>;
    return this.props.productList.map(product => (
      <ProductItem key={product.id} product={product} />
    ));
  }
}
