import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Deck from '../components/Deck'

class DeckContainer extends Component {
  render() {
    const { products } = this.props

    return (
      <Deck
        products={products}
        onCheckoutClicked={() => this.props.checkout()} />
    )
  }
}

DeckContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state)
  }
}

export default connect(
  mapStateToProps,
  { checkout }
)(DeckContainer)
