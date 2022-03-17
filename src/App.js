import React,{useState} from 'react'
import items from './data'
import Menu from './Menu';

import Categories from './Categories';
import './App.css';

// adding button dynamically
// new Set() method is use to get only uniq values to avoid repetetion.
// it prevent values from repeating twice or more
// adding 'all' to the begining of the value in an array is you create
//  an array will 'all' and the copy the uniq set
const allCategories =['all',...new Set(items.map((item)=> item.category)) ];
console.log(allCategories)
// pass allCategories to catgories stale below

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category ==='all') {
      setMenuItems(items)
     return category;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return <main>
   <section className="menu" >
     <div className="title">
     <h2>our menu</h2>
     <div className="underline"></div>
     </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
   </section>
  </main>

}

export default App;
