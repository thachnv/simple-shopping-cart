import React, { Component } from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <div className="product-thumbnail">
      <img src={product.image_url} />
    </div>
    <div className="product-name" title={product.product_name}>
      {product.product_name}
    </div>
    <div className="product-price">{product.price.toLocaleString()}</div>
    <button>Add to cart</button>
  </div>
);
export default ProductItem;
