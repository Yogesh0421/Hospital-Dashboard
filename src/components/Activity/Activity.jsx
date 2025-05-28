import React from 'react'
import './Activity.css'
import ActivityBar from '../ActivityBars/ActivityBar'

export const Activity = () => {

    return (
        <div className='activity'>
            <div className="activity-header">
                <h3>Activity</h3>
                <h6>3 Appointment on This Week</h6>
            </div>
            <div className="activity-bar-container">
                <ActivityBar/>
                <ActivityBar/>
                <ActivityBar/>
                <ActivityBar/>
                <ActivityBar/>
                <ActivityBar/>
                <ActivityBar/>
            </div>
            <div className="activity-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>
        </div>
    )
}
