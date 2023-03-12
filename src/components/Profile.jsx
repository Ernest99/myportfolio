import React from 'react'
import './profile.css'
import myImg from '../assets/images/me.jpeg'
import Btn from './Btn'
import {HiDownload} from 'react-icons/hi'
// import { data } from '../data'

const Profile = () => {
  return (
    <div>
        <div className="profile_container">
            <div className="profile">
               <div className="dp">
               <img src={myImg} alt="" />
               </div>
               <h4>Hi, I'm Ghansah Ernest 👋</h4>
               <h1>I Build And Design Stunning, <br /> brands, and Web Interfaces.</h1>
              <Btn text='Download CV' icon={<HiDownload/>}/>
            </div>
        </div>
        
    </div>
  )
}

export default Profile
