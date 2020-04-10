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


export default Inventories;