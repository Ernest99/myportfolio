import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiDribbbleFill} from 'react-icons/ri'
// import {RiGithubFill} from 'react-icons/ri'

import './nav.css'
const Nav = () => {
  return (
    <div>
      <nav>
        <div className="left">
            <button>
                <a href="mailto:dzegbloramanda@gmail.com">
                <AiOutlineMail className='mailIcon'/>
                </a>
            </button>
            <span>Get in touch</span>
        </div>
        <div className="middle">
            <a href="https://dribbble.com/ellymany"> <RiDribbbleFill className='socialIcon'/> </a>
            <a href="https://instagram.com/dzemandy_uiux?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr"> <RiInstagramFill className='socialIcon'/></a>
            <a href="https://www.linkedin.com/in/amanda-emmanuella-dzegblor-196b2618b"> <RiLinkedinFill className='socialIcon'/> </a>
        </div>
        <div className="right">
            <a href="https://dribbble.com/ellymany">Dribbble /</a>
            <a href="https://instagram.com/dzemandy_uiux?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr">Instagram /</a>
            <a href="https://www.linkedin.com/in/amanda-emmanuella-dzegblor-196b2618b">LinkedIn</a>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Nav
