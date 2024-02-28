import React from 'react'
import '../styles/searchbar.css'

function SearchBar() {
  return (
    <div className='search-container'>
      <form action="">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit" className='btn-search'><i class="fa fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBar