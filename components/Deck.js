import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class Deck extends Component {
  render() {
    const { products, total, onCheckoutClicked , onDrawClicked} = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to Deck.</em> :
      products.map((product, index) =>
        <div key={ 'product.id' + index }>
          { product.title }
        </div>
    )

    return (
      <div>
        <h3>Your Deck</h3>
        <div>{nodes}</div>
        <button onClick={ onCheckoutClicked }
          disabled={hasProducts ? '' : 'disabled'}>
          Clear Deck
        </button>
        <button onClick={ onDrawClicked.bind(null,3) }>
          Draw
        </button>
      </div>
    )
  }
}

Deck.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
