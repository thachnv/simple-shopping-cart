import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  productList: null,
});

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCT_LIST_SUCCESS':
      return state.set('productList', action.data);
    default:
      return state;
  }
};

export default reducer;
