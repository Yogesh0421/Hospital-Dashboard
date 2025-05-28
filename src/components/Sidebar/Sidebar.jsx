import React from 'react'
import './Sidebar.css'
import dashboard from '../../assets/dashboard.svg'
import calendar from '../../assets/calendar.svg'
import history from '../../assets/history.svg'
import statistics from '../../assets/statistics.svg'
import appointment from '../../assets/appointment.svg'
import chat from '../../assets/chat.svg'
import support from '../../assets/support.svg'
import setting from '../../assets/setting.svg'

const Sidebar = () => {
    return (
        <>
            <aside class="sidebar">
                <div class="logo">Health<span class="blue-dot">care.</span></div>
                <p>Genral</p>
                <nav class="nav-menu">
                    <ul>
                        <li class="active nav-item"> <img src={dashboard} alt=""></img>  Dashboard</li>
                        <li className='nav-item'><img src={history} alt=""></img>History</li>
                        <li className='nav-item'><img src={calendar} alt=""></img>Calendar</li>
                        <li className='nav-item'><img src={appointment} alt=""></img>Appointments</li>
                        <li className='nav-item'><img src={statistics} alt=""></img>Statistics</li>
                    </ul>
                </nav>
                <div class="tools">
                <p>Tools</p>
                    <ul>
                        <li className='nav-item'><img src={chat} alt=""></img>Chat</li>
                        <li className='nav-item'><img src={support} alt=""></img>Support</li>
                    </ul>
                </div>
                <div class="settings"><img src={setting} alt=""></img>Settings</div>
            </aside>

        </>
    )
}

export default Sidebar