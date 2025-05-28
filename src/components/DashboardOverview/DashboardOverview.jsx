import React from 'react'
import Down from '../../assets/downArrow.svg'
import bone from '../../assets/bone.png'
import lungs from '../../assets/lungs.png'
import tooth from '../../assets/tooth.png'
import './DashboardOverview.css'
import HealthStatusCard from '../HealthStatusCards/HealthStatusCard'
import Anatomy from '../Anatomy/Anatomy'

const DashboardOverview = () => {
  return (
    <div className='dash-board'>
        <div className='dash-board-header'>
            <h2>Dashboard</h2>
            <h6> This Week <img src={Down} alt="" /></h6>
        </div>
        <div className='img-container'>
            <Anatomy/>
            <div className="small-imgs">
                <HealthStatusCard image={lungs} name="Lungs" date="16 march 2025"  colour="#bc6c25" />
                <HealthStatusCard image={tooth} name="Teeth" date="16 march 2025" colour="#99d98c"/>
                <HealthStatusCard image={bone} name="Bone" date="16 march 2025" colour="#bc4749"/>
            </div>
        </div>
    </div>
  )
}

export default DashboardOverview