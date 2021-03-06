import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    // replace this later with checking if the player has a buy option still available
    // if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    // }
  }
}

export function checkout(products) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        cart
      })
      // Replace the line above with line below to rollback on failure:
      // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}

//assume for now always draw from top
export function draw(cardCount){
  return (dispatch, getState) => {
    const cart = getState().cart
    const cardsDrawn = cart.addedIds.slice(0,cardCount)
    dispatch({
      type: types.DRAW,
      cardsDrawn: cardsDrawn,
      discard: true
    })
  }
}
