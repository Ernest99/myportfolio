import React from 'react'
import './header.css'
import Nav from './Nav'
import Profile from './Profile'
import Skills from './Skills'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'


const Header = () => {
  return (
    <div>
      <header>
          <Nav/>
          <Profile/>
          <Skills/>
          <Service/>
          <Project/>
          <Contact/>
      </header>
    </div>
  )
}

export default Header
