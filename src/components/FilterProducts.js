import React, {Component} from 'react'
import CategoryBtn from './CategoryBtn'
import Inventories from './Inventory'

class FilterProducts extends Component{

  constructor (props) {
      super(props);
      this.state = {
          currentCategory: null
      }
  }

  setCategory(newName) {
    this.setState({currentCategory : newName})
  }

  render() {
    return(
        <div>
          <CategoryBtn setCategory={(name) => {this.setCategory(name)}}/>
          <div>
            {this.state.currentCategory}
          </div>
          <Inventories currentCategory={this.state.currentCategory}/>
        </div>
        
    )
  }

}

export default FilterProducts;