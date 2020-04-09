import React from 'react'
import data, {categories, categoriesWithCount, categoriesWithCountName, categories_unique} from '../data'


function CategoryBtn()  {
    return categories_unique.map( (item) => {
    return <button key={`-${item}`}>{item}{categoriesWithCount[item]}</button>
    })
  }

export default CategoryBtn;
