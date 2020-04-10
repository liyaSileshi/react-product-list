import React, {Component} from 'react'
import CategoryBtn from './CategoryBtn'
import Inventories, {SumAllPrices} from './Inventory'
import './FilterProducts.css'
import data from '../data.json' //   import data.json

class FilterProducts extends Component{

  constructor (props) {
      super(props);
      this.state = {
          currentCategory: 'All'
      }
  }

  setCategory(newName) {
    this.setState({currentCategory : newName})
  }

   // Challenge 13: Using Array.reduce() again, sum the total
   //  for currently selected products.
   SumPriceCurrProducts(){
    if (this.state.currentCategory !== 'All') {
      return data.filter((item) => {
        return item.category === this.state.currentCategory
    }).reduce((total_price, item) => {
        // remove the $ sign
        let price = item.price.substring(1)
        //  change from string to float
        price = parseFloat(price)
        total_price += price
        //  return total price
        return parseFloat(total_price.toFixed(2))
    }, 0)
  } 
}


  render() {
    return(
        <div>
          <CategoryBtn setCategory={(name) => {this.setCategory(name)}}/>
          <button className='category-btn' onClick = {() => this.setCategory('All')}> All </button>
          <div>
            Category name: {this.state.currentCategory}
            <p>
              Sum of all prices: $<SumAllPrices />
            </p>
            <p>
              Sum of prices for current category: ${this.SumPriceCurrProducts()}
            </p>
          </div>
          <div className='products-list'>
            <Inventories currentCategory={this.state.currentCategory}/>
          </div>
        </div>
    )
  }
}

export default FilterProducts;