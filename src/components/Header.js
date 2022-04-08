import React from 'react'
import AddAnnounce from './AddAnnounce'
import Categories from './Categories'
import Login from './Login'
import SearchAnnounce from './SearchAnnounce'
import WishList from './WishList'


function Header() {
  return (
    <header className='header'>
      <div className="left-header">
        <h1>Återanvända</h1>
        <Categories />
      </div>
      <div className="right-header">
        <AddAnnounce />
        <SearchAnnounce />
        <WishList />
        <Login />
      </div>
    </header>
  )
}

export default Header