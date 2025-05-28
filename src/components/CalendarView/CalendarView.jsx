import React from 'react'
import arrow from '../../assets/leftArrow.svg'
import doctor from '../../assets/doctor.png'
import add from '../../assets/add.svg'
import login from '../../assets/login.svg'
import teeth from '../../assets/tooth.png'
import arms from '../../assets/arms.png'
import eye from '../../assets/eye.png'
import heart from '../../assets/heart.png'
import injection from '../../assets/injection.png'
import Calendar from '../Calendar/Calendar'
import './CalendarView.css'
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard'

const CalendarView = () => {
  return (
    <div className='calendar-view'>
      <div className="profile-section">
        <img className='profile' src={login} alt="" />
        <img className='add-button' src={add} alt="" />
      </div>
      <div className='month-name'>
        <h3>October 2021</h3>
        <img src={arrow} alt="" />
      </div>
      <Calendar />
      <div className="container">
        <SimpleAppointmentCard blueBg={true} category="Dentist" image={teeth} time="09:00-11:00" name={"Dr. Cameron williamson"} />
        <SimpleAppointmentCard category="Physiotherapy Appointment" image={arms} time="11:00-12:00" name={"Dr. kevin Djones"} />
      </div>
      <h2 className='upcoming-schedule'>
        The Upcoming Schedule
      </h2>
      <h5 className='appointment-day'>
        On Thursday
      </h5>
      <div className="container">
        <SimpleAppointmentCard  category="Health Checkup Complete" image={injection} time="11:00 AM"  />
        <SimpleAppointmentCard category="Ophthalmologist" image={eye} time="14:00 PM" />
      </div>
      <h5 className='appointment-day'>
        On Saturday
      </h5>
      <div className="container">
        <SimpleAppointmentCard  category="Cardiologist" image={heart} time="12:00 AM"  />
        <SimpleAppointmentCard category="Neurologist" image={doctor} time="16:00 PM"  />
      </div>
    </div>
  )
}

export default CalendarView