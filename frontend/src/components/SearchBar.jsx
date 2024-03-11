import React from 'react'
import '../styles/searchbar.css'

function SearchBar() {
  return (
    <div className='search-container'>
      <form action="" id="search-form">
        <input id="search-input" type="text" placeholder="Search.." name="search" />
        <button type="submit" className='btn-search'><i className="fa fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBar