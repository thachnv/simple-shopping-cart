import Immutable from 'seamless-immutable';

const INIT_STATE = Immutable({
  shoppingCart: null,
});

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'LOAD_SHOPPING_CART_SUCCESS':
      return state.set('shoppingCart', action.data);
    case 'ADD_TO_SHOPPING_CART':
      if (!state.shoppingCart) {
        return state.set('shoppingCart', [
          {
            product: action.product,
            amount: action.amount,
          },
        ]);
      }

      const index = state.shoppingCart.findIndex(
        item => action.product.id === item.product.id,
      );

      if (index > -1) {
        return state.setIn(
          ['shoppingCart', index, 'amount'],
          state.shoppingCart[index].amount + action.amount,
        );
      } else {
        return state.shoppingCart.concat({
          product: action.product,
          amount: action.amount,
        });
      }
    default:
      return state;
  }
};

export default reducer;
