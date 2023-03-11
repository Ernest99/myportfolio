import React from 'react'
import './profile.css'
import myImg from '../assets/images/me.jpeg'
import CV from '../assets/images/Ernest-Ghansah-MY-CV.pdf'
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
               <h4>Hi, I'm Ghansah Ernest 🖐️</h4>
               <h1>Creating Stunning UI/UX Designs, <br /> brands, and Web Applications.</h1>
               <div className="cv_btn">
            <a href="../assets/images/Ernest-Ghansah-MY-CV.pdf" download={CV}>Download CV <span><HiDownload/></span></a>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile
