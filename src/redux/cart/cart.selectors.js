import {createSelector} from 'reselect'

// input selector:
//    Gets the whole state, and strips off a slice that is needed
const selectCart = state => state.cart;

// ?because we user 'createSelector' here, this is now a memoized selector
// caching the values and preventing re-run of actions on re-render
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
  )
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)
