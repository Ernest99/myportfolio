import React from 'react'
import './header.css'
import Nav from './Nav'
import Profile from './Profile'


const Header = () => {
  return (
    <div>
      <header>
          <Nav/>
          <Profile/>
      </header>
    </div>
  )
}

export default Header
