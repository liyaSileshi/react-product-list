import React from 'react';
import './App.css';
// import data, {categories, categoriesWithCount, categoriesWithCountName, categories_unique} from './data'
// import CategoryBtn from './components/CategoryBtn'
// import Inventories from './components/Inventory'
import FilterProducts from './components/FilterProducts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FilterProducts />
      </header> 
    </div>
  );
}

export default App;
