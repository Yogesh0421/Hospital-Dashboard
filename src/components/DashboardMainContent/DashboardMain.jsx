import React from 'react'
import './DashboardMain.css'
import search from '../../assets/search.svg'
import bell from '../../assets/bell.svg'
import DashboardOverview from '../DashboardOverview/DashboardOverview'
import { Activity } from '../Activity/Activity'

const DashboardMain = () => {
  return (
    <div className='dash-board-container'>
        <div className='search-bar-container'>
          <div className='search-bar'>
            <img src={search} alt="" />
            search
          </div>
          <div className="bell-icon">
          <img src={bell} alt="" />
          </div>
        </div>
        <DashboardOverview/>
        <Activity />
    </div>
  )
}

export default DashboardMain