import React from 'react'
import './profile.css'
import Resume from '../assets/images/Ernest-Ghansah-MY-CV.pdf'

const Btn = ({text,icon}) => {
  return (
    <div>
       <div className="cv_btn">
            <a href={Resume} download>{text} <span>{icon}</span></a>
        </div>
    </div>
  )
}

export default Btn
