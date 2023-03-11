import React from 'react'
import './skills.css'
import { data } from '../data'
const Skills = () => {
  return (
    <div>
      <div className="skill_container">
       {
        data.map((({id,img})=>{
            return(
                <div key={id}>
                    <img src={img} alt="" />
                </div>
            )
        }))
       }
      </div>
    </div>
  )
}

export default Skills
