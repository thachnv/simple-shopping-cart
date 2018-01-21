export const loadShoppingCart = () => ({
  type: 'LOAD_SHOPPING_CART_SUCCESS',
  data: JSON.parse(localStorage.getItem('shopping_cart')),
});

export const addToShoppingCart = (product, amount) => {
  return {
    type: 'ADD_TO_SHOPPING_CART',
    product,
    amount,
  };
};
