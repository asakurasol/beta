import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout, draw } from '../actions'
import { getHand } from '../reducers'
import Hand from '../components/Hand'

class HandContainer extends Component {
  render() {
    const { products } = this.props

    return (
      <Hand
        products={products} />
    )
  }
}
HandContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })).isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getHand(state)
  }
}

export default connect(
  mapStateToProps,
  { draw }
)(HandContainer)
