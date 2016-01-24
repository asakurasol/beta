import {
  CHECKOUT_REQUEST, 
  DRAW
} from '../constants/ActionTypes'

const initialState = {
  cardsInHand: [],
}

function cardsInHand(state = initialState.cardsInHand, action) {
  console.log('action', action)
  switch (action.type) {
    case DRAW:
      if (action.discard) {
        return action.cardsDrawn
      } else {
        return state.concat(action.cardsDrawn);
      }
    default:
      return state
  }
}

export default function hand(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    default:
      return {
        cardsInHand: cardsInHand(state.cardsInHand, action),
      }
  }
}

export function getHandIds(state) {
  console.log(state)
  return state.cardsInHand
}
