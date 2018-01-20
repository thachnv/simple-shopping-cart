import products from '../../products.json';

export const loadProductList = () => ({
  type: 'LOAD_PRODUCT_LIST_SUCCESS',
  data: products,
});
