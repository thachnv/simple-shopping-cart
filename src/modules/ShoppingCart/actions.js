export const loadShoppingCart = () => {
  let shoppingCart;
  try {
    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
  } catch (e) {
    shoppingCart = null;
  }
  return {
    type: 'LOAD_SHOPPING_CART_SUCCESS',
    data: shoppingCart,
  };
};

export const addToShoppingCart = (product, amount) => {
  return {
    type: 'ADD_TO_SHOPPING_CART',
    product,
    amount,
  };
};

export const removeFromShoppingCart = productId => {
  return {
    type: 'REMOVE_FROM_SHOPPING_CART',
    productId,
  };
};
