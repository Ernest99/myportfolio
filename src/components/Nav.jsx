import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiGithubFill} from 'react-icons/ri'
import './nav.css'
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="left">
            <button>
                <a href="mailto:ernest.ghansah369@gmail.com">
                <AiOutlineMail className='mailIcon'/>
                </a>
            </button>
            <span>Get in touch</span>
        </div>
        <div className="middle">
            <a href="./"> <RiLinkedinFill className='socialIcon'/> </a>
            <a href="./"> <RiInstagramFill className='socialIcon'/></a>
            <a href="./"> <RiGithubFill className='socialIcon'/> </a>
        </div>
        <div className="right">
            <a href="./">Dribbble /</a>
            <a href="./">Instagram /</a>
            <a href="./">LinkedIn</a>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Nav
