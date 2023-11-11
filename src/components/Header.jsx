import React from 'react'
import './header.css'
import Nav from './Nav'
import Profile from './Profile'
import Skills from './Skills'
import Service from './Service'
import Project from './Project'
import Circle from './Circle'


const Header = () => {
  return (
    <div>
      <Circle/>
      <header>
          <Nav/>
          <Profile/>
          <Skills/>
          <Service/>
          <Project/>
      </header>
    </div>
  )
}

export default Header
