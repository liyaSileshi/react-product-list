import React, {Component} from 'react'
import data, {categories, categoriesWithCount, categoriesWithCountName, categories_unique} from '../data'
import './CategoryBtn.css'

function CategoryBtn(props) {
 
    return categories_unique.map( (item) => {
    return (
      <button className = 'category-btn'
        onClick={() => props.setCategory(item)}
        key={`-${item}`}>{item} {categoriesWithCount[item]}
      </button>
      )
      }
    )
  }

export default CategoryBtn;
