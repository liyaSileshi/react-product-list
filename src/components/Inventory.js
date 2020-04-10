import React from 'react'
import data from '../data.json' //   import data.json
import './Inventory.css'

function Inventories(props) {
    if(props.currentCategory === 'All') { //    if 'all' is clicked
          return data.map((item) => {
        return <div className='product' key = {`-${item.id}`}>
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  <p>{item.description}</p>
              </div>
      })
    }
    else {  //   else filter by the button names
    return data.filter((item) => {
        return item.category === props.currentCategory
    }).map((item) => {
        return <div className='product' key = {`-${item.id}`}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
    })
}
} 
// Challenge 13: Use Array.reduce() to get the sum of all
// of the prices for all Products.
function SumAllPrices() {
    return data.reduce((total_price, item) => {
        //  remove the $ sign
        let price = item.price.substring(1)
        //  change from string to float
        price = parseFloat(price)
        total_price += price
        //  return total price
        return parseFloat(total_price.toFixed(2))
    }, 0)
}


export default Inventories;
export {SumAllPrices};