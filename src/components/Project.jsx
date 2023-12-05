import React from 'react'
import './project.css'
import Okuafo from '../assets/images/okuafo.jpg'
import Restorers from '../assets/images/restorers.jpg'
import Ebo from '../assets/images/ebo.jpg'
import Deaflogo from '../assets/images/deaflogo.jpg'
import Food1 from '../assets/images/food1.jpg'
import Food2 from '../assets/images/food.jpg'
import Jeep from '../assets/images/jeep.jpg'

const projectData = [
  {
      id: 1,
      title: 'Okuafo Pa',
      link: 'https://www.figma.com/file/8mMX2MYAWpGNBym80QlwRo/Developer-1%5C?type=design&node-id=0%3A1&mode=design&t=5KQGVtlYSINs7u2e-1',
      img: Okuafo
  },
  {
      id: 2,
      title: 'Restorers Home',
      link: 'https://www.figma.com/file/y3sT2eeO7ad5B2wKdWbLP0/Developer-2?type=design&node-id=0%3A1&mode=design&t=1obUrKVE5B8UWbcC-1',
      img: Restorers
  },
  {
      id: 3,
      title: 'Augustine Lemaire',
      link: 'https://www.figma.com/file/2LPSmEBlgYYDSZQlXPc1sp/Lemaire?type=design&node-id=0%3A1&mode=design&t=046OsvTX8UVOINaQ-1',
      img: Ebo
  },
  {
      id: 4,
      title: 'Photography',
      link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
      img: Deaflogo
  },
  {
    id: 5,
    title: 'Food Design Flyer',
    link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
    img: Food1
  },
  {
    id: 6,
    title: 'Food Poster Design',
    link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
    img: Food2
  },
  {
    id: 7,
    title: 'Jeep Poster Design',
    link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
    img: Jeep
  },
  {
    id: 8,
    title: 'Food Design Flyer',
    link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
    img: Food1
  },
  {
    id: 9,
    title: 'Food Poster Design',
    link: 'https://www.figma.com/file/BMcvuuHIQwBpjawM9TbwkK/Developer-3?type=design&node-id=0%3A1&mode=design&t=qXOQmBsfr81sBTLd-1',
    img: Food2
  },
]




const Project = () => {
  return (
    <div>
      <div className="project_wrapper">
        <div className="project_caption">
          <h1>Project I have worked on</h1>
        </div>
        <div className="p-items">
               {
                projectData.map(({id,link,title,img})=>{
                    return(
                        <div className="p-item" key={id}>
                            <div className="p-details">
                              <div className="image_container">
                                <img src={img} />
                              </div>
                            <h3 className="p-title">{title}</h3>
                            <a className='view_btn' href={link}>View</a>
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

export default Project
