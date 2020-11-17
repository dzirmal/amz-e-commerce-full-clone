export const initialState = {
  cart: [],
  user: null,
}

// we use the "selector" for the price rendering and its total value
// Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

export const star = (
  <img src='http://s3.amazonaws.com/pix.iemoji.com/sams33/0242.png' alt='' />
)

export const getQuantityInCart = (cart) => {
  // console.log('cart', cart);
  return cart?.reduce((total, item) => (total = total + item.quantity), 0)
}

// state is like in class component
// action is like we add an item into the cart
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    // This on is only for to show us how many users are longed in or out
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'ADD_TO_CART':
      let cartCopy = [...state.cart]
      let newItemIndex = cartCopy.findIndex((i) => i.id === action.item.id)
      if (newItemIndex < 0) {
        cartCopy.push({ ...action.item, quantity: 1 })
      } else {
        const newItem = {
          ...cartCopy[newItemIndex],
        }
        newItem.quantity += 1
        cartCopy[newItemIndex] = newItem
      }

      return { ...state, cart: cartCopy }
    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      }
    case 'REMOVE_FROM_CART':
      // Logic for removing item from cart

      // we cloned the cart
      let newCart = [...state.cart]

      // we find the index of the item
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )

      if (index >= 0) {
        // item exists in cart, remove it....
        newCart.splice(index, 1)
      } else {
        // console.warn() is a RED console.log()
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart`
        )
      }

      return { ...state, cart: newCart }
    default:
      return state
  }
}
export default reducer
