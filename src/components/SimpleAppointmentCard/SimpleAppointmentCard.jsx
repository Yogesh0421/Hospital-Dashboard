import React from 'react'
import './SimpleAppointmentCard.css'

const SimpleAppointmentCard = ({category,image,time,name,blueBg}) => {
  return (
    <div className={`appointment-card ${blueBg?'blueBg':""}`}>
        <div className='appointment-card-container'>
            <h2>{category}</h2>
            <img src={image} alt="" />
        </div>
        <h4 >{time}</h4>
        {name && <p>{name}</p>}
    </div>
  )
}

export default SimpleAppointmentCard