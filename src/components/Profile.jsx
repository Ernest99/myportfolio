import React from 'react'
import './profile.css'
import myImg from '../assets/images/dp_3.jpeg'
// import Btn from './Btn'
// import {HiDownload} from 'react-icons/hi'
import { motion } from "framer-motion"
// import { data } from '../data'

const Profile = () => {
 const transtion = { duration : 3, type: 'spring'}

  return (
    <div>
        <div className="profile_container">
            <div className="profile">
               <div className="dp">
               <img src={myImg} alt="" />
               </div>
               <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transtion = {transtion}
               >Hi, I'm Mandy 👋</motion.h4>
               <motion.h1
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transtion = {transtion}
               >I create captivating brands,innovative apps  <br/>and visually appealing web interfaces.</motion.h1>
              {/* <Btn text='Request CV' icon={<HiDownload/>}/> */}
            </div>
        </div>
        
    </div>
  )
}

export default Profile
