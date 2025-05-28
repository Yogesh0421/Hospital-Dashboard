import React from 'react'
import './ActivityBar.css'

const ActivityBar = () => {
    const bars = [
        { height: '60%', color: 'lightblue' },
        { height: '80%', color: 'darkblue' },
        { height: '40%', color: 'gray' },
        { height: '90%', color: 'blue' },
        { height: '70%', color: 'lightblue' },
    ];

    return (
        <div className='activity-bar-wrapper'>
            {bars.map((bar, index) => (
                <div
                    key={index}
                    className={`activity-bar ${bar.color}`}
                    style={{ height: bar.height }}
                ></div>
            ))}
        </div>
    );
}

export default ActivityBar