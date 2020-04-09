import React from 'react'
import data from '../data.json' //   import data.json

function Inventories(props) {
    return data.filter((item) => {
        return item.category === props.currentCategory
    }).map((item) => {
        return <div key = {`-${item.id}`}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
    })
} 


export default Inventories;