import React, {Component} from 'react'
import data, {categories, categoriesWithCount, categoriesWithCountName, categories_unique} from '../data'


function CategoryBtn(props) {
 
    return categories_unique.map( (item) => {
    return (
      <button
        onClick={() => props.setCategory(item)}
        key={`-${item}`}>{item}{categoriesWithCount[item]}
      </button>
      )
      })
  }

// function CategoryBtn()  {
//     return categories_unique.map( (item) => {
//     return <button key={`-${item}`}>{item}{categoriesWithCount[item]}</button>
//     })
//   }

export default CategoryBtn;
