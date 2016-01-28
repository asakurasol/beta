import {
  CHECKOUT_REQUEST, 
  DRAW
} from '../constants/ActionTypes'

const initialState = {
  cardsInDiscard: [],
}

function cardsInDiscard(state = initialState.cardsInDiscard, action) {
  switch (action.type) {
    case DRAW:
      if (action.discard) {
        return state.concat(action.cardsDiscarded);
      } else {
        return state;
      }
    default:
      return state
  }
}

export default function discard(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    default:
      return {
        cardsInDiscard: cardsInDiscard(state.cardsInDiscard, action),
      }
  }
}

export function getDiscardIds(state) {
  return state.cards
}
