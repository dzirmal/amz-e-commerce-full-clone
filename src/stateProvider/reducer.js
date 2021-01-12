import { Star } from '../Helpers/globalStyles'

export const initialState = {
  cart: [],
  user: null,
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

export const star = (
  <Star
    src='http://s3.amazonaws.com/pix.iemoji.com/sams33/0242.png'
    alt='Star'
  />
)

export const getQuantityInCart = (cart) => {
  return cart?.reduce((total, item) => (total = total + item.quantity), 0)
}

const reducer = (state, action) => {
  switch (action.type) {
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
      let newCart = [...state.cart]

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )

      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
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
