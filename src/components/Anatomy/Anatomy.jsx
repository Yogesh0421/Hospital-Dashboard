import React from 'react'
import human from '../../assets/humanMuscle.png'
import heart from '../../assets/heart.png'
import leg from '../../assets/leg.png'
import './Anatomy.css'
import { AnatomyCard } from '../AnatomyCard/AnatomyCard'

const Anatomy = () => {
  return (
    <div className='anatomy'>
        <img src={human}  alt="" />
        <AnatomyCard image={heart} text={'Healthy Heart'} position={'right'} color={'blue'}/>
        <AnatomyCard image={leg} text={'Healthy leg'} position={'left'} color={'skyblue'}/>
    </div>
  )
}

export default Anatomy