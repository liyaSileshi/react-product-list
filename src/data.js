import data from './data.json' //   import data.json

// Challenge 2 - Get a list of all categories
const categories = data.map((item) => {
    // console.log(item.category)
    return item.category
})

//  Challenge 3 - Make the categories list a list of unique values.
const categorie_set = new Set(categories) //    gives only unique categories
const categories_unique = Array.from(categorie_set) //  make an array from the set
console.log(categories_unique)

// Challenge 4 - Make an Object whose keys are the names of
// categories and whose values are the number of times that
// category appears in the data.
const categoriesWithCount = data.reduce((obj, item) => {
    // check if cat exists as a key in an object
    if (obj[item.category] !== undefined){
        //if so add
        obj[item.category] += 1
    }else{
        // set this key with a value of 1
        obj[item.category] = 1
    }
    return obj
    }
    ,{})  //initial value of object is {}
console.log(categoriesWithCount)

//  Challenge 5 - Use Reduce to make an array of objects 
// that have a name and a count. This array will be similar 
// to Challenge 4 but in a different format. For this list all 
// of the names should be unique and each should only appear once!
const categoriesWithCountName = categories_unique.reduce((arr, item) => {
   arr.push({name: item, count: categoriesWithCount[item]})
   return arr
}
,[])
console.log(categoriesWithCountName)





export {data, categories} //  export the native JS array