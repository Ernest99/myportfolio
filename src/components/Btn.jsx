import React from 'react'
import './profile.css'


const Btn = ({text,icon}) => {
  return (
    <div>
       <div className="cv_btn">
            <a href="./" download>{text} <span>{icon}</span></a>
        </div>
    </div>
  )
}

export default Btn
