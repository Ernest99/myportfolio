import React from 'react'
import './service.css'
// import {serviceData} from '../utils/serviceData'

import {SiVisualstudiocode} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {RiComputerFill} from 'react-icons/ri'
import {RiWebcamFill} from 'react-icons/ri'
const serviceData = [
    {
        id: 1,
        title: 'UI & UX',
        msg: 'creating user-friendly, effective, and intuitive interfaces.',
        icon: <FiFigma/>
    },
    {
        id: 2,
        title: 'Marketing',
        msg: 'Marketing concepts into outstanding visual and graphic design.',
        icon: <RiWebcamFill/>
    },
    {
        id: 3,
        title: 'Design',
        msg: 'creating designs that appeal to your audience visually.',
        icon: <RiComputerFill/>
    },
    {
        id: 4,
        title: 'Development',
        msg: 'Using the most recent design trends and technologies, bring your vision to life.',
        icon: <SiVisualstudiocode/> 
    }
]

const Service = () => {
  return (
    <div>
    
        <div className="s-wrapper">
            <div className="s-title">
                <h1>Work together with brands and agencies <br /> to produce significant outcomes</h1>
            </div>
            <div className="s-items">
               {
                serviceData.map(({id,msg,title,icon})=>{
                    return(
                        <div className="item" key={id}>
                            <div className="s-details">
                            <span>{icon}</span>
                            <h3>{title}</h3>
                            <p>{msg}</p>
                            </div>
                        </div>
                    )
                })
               }
            </div>
        </div>
    </div>
  )
}

export default Service
