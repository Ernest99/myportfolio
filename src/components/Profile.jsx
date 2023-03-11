import React from 'react'
import './profile.css'
import myImg from '../assets/images/me.jpeg'

const Profile = () => {
  return (
    <div>
        <div className="profile_container">
            <div className="profile">
               <div className="dp">
               <img src={myImg} alt="" />
               </div>
               <h4>Hi, I'm Ghansah Ernest 🖐️</h4>
               <h1>Building Epic UI/UX Designs, <br /> brands, and Web Applications.</h1>
            </div>
        </div>
    </div>
  )
}

export default Profile
