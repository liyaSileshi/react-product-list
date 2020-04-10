import React from 'react'
import {categories, categoriesWithCount, categories_unique} from '../data'
import './CategoryBtn.css'

function CategoryBtn(props) {
 
    return categories_unique.map( (item) => {
    return (
      <button className = 'category-btn'
        onClick={() => props.setCategory(item)}
        key={`-${item}`} count={categoriesWithCount[item]}>{item}
      </button>
      )
      }
    )
  }

export default CategoryBtn;
