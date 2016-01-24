import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: shuffleArray([1,4,1,1,1,4,1,1,4,1]),
  quantityById: {"1": 7, '4': 3}
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [ ...state, action.productId ]
    default:
      return state
  }
}

function quantityById(state = initialState.quantityById, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
               addedIds: shuffleArray([1,4,1,1,1,4,1,1,4,1]),
               quantityById: {"1": 7, '4': 3}
             }
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
  return state.addedIds
}
