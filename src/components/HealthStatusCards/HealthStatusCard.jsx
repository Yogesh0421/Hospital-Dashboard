import React from 'react'
import './HealthStatusCard.css'

const HealthStatusCard = ({image,name,date,colour}) => {
  return (
    <div className='status-card'>
        <div className='status-card-container'>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
        <h4>Date: {date}</h4>
        <div className='progress-bar-container' >
            <div className='progress-bar' style={{backgroundColor:colour}}></div>
        </div>
    </div>
  )
}

export default HealthStatusCard