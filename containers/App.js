import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import DeckContainer from './DeckContainer'
import HandContainer from './HandContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The First Nations</h1>
        <hr/>
        <ProductsContainer />
        <hr/>
        <DeckContainer />
        <hr/>
        <HandContainer />
      </div>
    )
  }
}
