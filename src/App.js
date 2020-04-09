import React from 'react';
import './App.css';
// import data, {categories, categoriesWithCount, categoriesWithCountName, categories_unique} from './data'
import CategoryBtn from './components/CategoryBtn'



function App() {
  return (
    <div className="App">
      <header className="App-header">
           <CategoryBtn /> 
      </header>
    </div>
  );
}

export default App;
