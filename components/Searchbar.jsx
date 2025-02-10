import React from 'react'

export default function Searchbar({setQuery}) {
  return (
   <div className="search-container">
    <div className="fa-solid fa-magnifying-glass"></div>
    <input type='text' onChange={(e)=> setQuery(e.target.value)} placeholder='Search for the country...'/>

   </div>
  )
}
