import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class Hand extends Component {
  render() {
    const { products } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to Hand.</em> :
      products.map((product, index) =>
        <div key={ 'product.id' + index }>
          { product.title }
        </div>
    )

      console.log('hand"s props', this.props)

    return (
      <div>
        <h3>Your Hand</h3>
        <div>{nodes}</div>
      </div>
    )
  }
}

Hand.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
