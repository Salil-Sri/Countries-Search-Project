import React, { useState } from 'react'
import Countrylist from './Countrylist';
import Searchbar from './Searchbar';
import SearchMenu from './SearchMenu';
import '../style.css'
import { themeContext } from './ThemeContext';

export default function Home() {
    const[query,setQuery] = useState('')
    console.log(themeContext);
    
  return (
   <>
   <main>
          <div className="search-filter-container">
          <Searchbar setQuery={setQuery}/>
          <SearchMenu setQuery={setQuery}/>
          </div>
          <Countrylist query={query} />
          </main>
  </>
  )
}
