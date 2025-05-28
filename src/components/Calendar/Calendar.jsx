import React from "react";
import "./Calendar.css";

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="days">
                <div className="day">
                    <span>Mon</span>
                    <div className="date">25</div>
                    <div className="times">
                        <div className="time">10:00</div>
                        <div className="time">11:00</div>
                        <div className="time">12:00</div>
                    </div>
                </div>

                <div className="day active">
                    <span>Tues</span>
                    <div className="date">26</div>
                    <div className="times">
                        <div className="time">08:00</div>
                        <div className="time selected">09:00</div>
                        <div className="time">10:00</div>
                    </div>
                </div>

                <div className="day">
                    <span>Wed</span>
                    <div className="date">27</div>
                    <div className="times">
                        <div className="time">12:00</div>
                        <div className="time">----</div>
                        <div className="time">13:00</div>
                    </div>
                </div>

                <div className="day">
                    <span>Thurs</span>
                    <div className="date">28</div>
                    <div className="times">
                        <div className="time">10:00</div>
                        <div className="time selected disabled">11:00</div>
                        <div className="time">----</div>
                    </div>
                </div>

                <div className="day">
                    <span>Fri</span>
                    <div className="date">29</div>
                    <div className="times">
                        <div className="time">----</div>
                        <div className="time">14:00</div>
                        <div className="time">16:00</div>
                    </div>
                </div>

                <div className="day">
                    <span>Sat</span>
                    <div className="date">30</div>
                    <div className="times">
                        <div className="time disabled selected">12:00</div>
                        <div className="time">14:00</div>
                        <div className="time">15:00</div>
                    </div>
                </div>

                <div className="day">
                    <span style={{ color: "#ccc" }}>Sun</span>
                    <div className="date" style={{ color: "#ccc" }}>31</div>
                    <div className="times">
                        <div className="time selected disabled">09:00</div>
                        <div className="time disabled">10:00</div>
                        <div className="time disabled">11:00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
