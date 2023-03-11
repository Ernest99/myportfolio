import React from 'react'
import './header.css'
import Nav from './Nav'
import Profile from './Profile'
import Skills from './Skills'


const Header = () => {
  return (
    <div>
      <header>
          <Nav/>
          <Profile/>
          <Skills/>
      </header>
    </div>
  )
}

export default Header
