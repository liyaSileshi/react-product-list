import data from './data.json' //   import data.json

// Challenge 2 - Get a list of all categories
const categories = data.map((item) => {
    // console.log(item.category)
    return item.category
})

//  Challenge 3 - Make the categories list a list of unique values.
const categorie_set = new Set(categories) //    gives only unique categories
const categories_unique = Array.from(categorie_set) //  make an array from the set
// console.log(categories_unique)

// Challenge 4 - Make an Object whose keys are the names of
// categories and whose values are the number of times that
// category appears in the data.
const categoriesWithCount = data.reduce((obj, cat) => {
    // check if cat exists as a key in an object
    if (obj.hasOwnProperty(cat)){
        //if so add
        obj[cat] += 1
    }else{
        // set this key with a value of 1
        obj[cat] = 1
    }
    return obj
    }
    ,{})  //initial value of object is {}
// console.log(Array.from(categoriesWithCount))

export {data, categories} //  export the native JS array