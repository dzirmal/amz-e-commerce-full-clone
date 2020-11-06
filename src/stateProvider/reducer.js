export const initialState = {
  cart: [],
  user: null,
};

// we use the "selector" for the price rendering and its total value
// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const star = (
  <img src='http://s3.amazonaws.com/pix.iemoji.com/sams33/0242.png' alt='' />
);

// state is like in class component
// action is like we add an item into the cart
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // This on is only for to show us how many users are longed in or out
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_CART':
      // Logic for adding item to cart
      return {
        // In words: give the state.
        ...state,
        // give me the cart and the new item
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      // Logic for removing item from cart

      // we cloned the cart
      let newCart = [...state.cart];

      // we find the index of the item
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        // item exists in cart, remove it....
        newCart.splice(index, 1);
      } else {
        // console.warn() is a RED console.log()
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart`
        );
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
};
export default reducer;
