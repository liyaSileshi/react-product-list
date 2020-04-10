import React, {Component} from 'react'
import CategoryBtn from './CategoryBtn'
import Inventories from './Inventory'
import './FilterProducts.css'

class FilterProducts extends Component{

  constructor (props) {
      super(props);
      this.state = {
          currentCategory: 'all'
      }
  }

  setCategory(newName) {
    this.setState({currentCategory : newName})
  }

  render() {
    return(
        <div>
          <CategoryBtn setCategory={(name) => {this.setCategory(name)}}/>
          <button className='category-btn' onClick = {() => this.setCategory('all')}> All </button>
          <div>
            {this.state.currentCategory}
          </div>
          <div className='products-list'>
            <Inventories currentCategory={this.state.currentCategory}/>
          </div>
        </div>
    )
  }
}

export default FilterProducts;