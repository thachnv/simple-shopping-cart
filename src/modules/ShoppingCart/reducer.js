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
        return state.set(
          'shoppingCart',
          state.shoppingCart.concat({
            product: action.product,
            amount: action.amount,
          }),
        );
      }
    case 'REMOVE_FROM_SHOPPING_CART':
      const foundIdx = state.shoppingCart.findIndex(
        item => action.productId === item.product.id,
      );

      if (foundIdx > -1) {
        return state.set(
          'shoppingCart',
          state.shoppingCart
            .slice(0, foundIdx)
            .concat(state.shoppingCart.slice(foundIdx + 1)),
        );
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
