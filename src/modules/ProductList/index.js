import { connect } from 'react-redux';
import ProductList from './ProductList.js';
import { loadProductList } from './actions.js';

const mapStateToProps = state => {
  return {
    productList: state.productListModule.productList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProductList: () => dispatch(loadProductList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
