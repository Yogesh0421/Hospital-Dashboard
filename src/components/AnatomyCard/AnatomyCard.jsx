import React from 'react'
import './AnatomyCard.css'

export const AnatomyCard = ({image,text,position,color}) => {
  return (
    <div className={`anatomy-card ${position} ${color}`}>
        <img src={image} alt="" />
        <h6>{text}</h6>
    </div>
  )
}
