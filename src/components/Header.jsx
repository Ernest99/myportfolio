import React from 'react'
import './header.css'
import Nav from './Nav'
import Profile from './Profile'
import Skills from './Skills'
import Service from './Service'


const Header = () => {
  return (
    <div>
      <header>
          <Nav/>
          <Profile/>
          <Skills/>
          <Service/>
      </header>
    </div>
  )
}

export default Header
