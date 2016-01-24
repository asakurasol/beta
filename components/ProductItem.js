import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props

    return (
      <div
        onClick={this.props.onAddToCartClicked}
        style={{ marginBottom: 20 }}>
        <Product
          title={product.title}
          price={product.price} />
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    effects: PropTypes.number
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
