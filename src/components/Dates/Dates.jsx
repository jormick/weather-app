import "./dates.css";
import React from "react";

const Dates = () => {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentMonth = months[date.getMonth()];

  // to get today number and next 4 days
  const getNextDays = (numberOfDays) => {
    const result = [];
    const today = new Date();

    for (let i = 0; i < numberOfDays; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      result.push(currentDate.getDate());
    }

    return result;
  };

  const days = getNextDays(5);

  return (
    <div className="dates-bar">
      <div className="date-picker">
        <div className="date">
          <p className="day-text">{days[0]}</p>
          <p className="month-text">{currentMonth}</p>
        </div>
        <div className="date">
          <p className="day-text">{days[1]}</p>
          <p className="month-text">{currentMonth}</p>
        </div>
        <div className="date">
          <p className="day-text">{days[2]}</p>
          <p className="month-text">{currentMonth}</p>
        </div>
        <div className="date">
          <p className="day-text">{days[3]}</p>
          <p className="month-text">{currentMonth}</p>
        </div>
        <div className="date">
          <p className="day-text">{days[4]}</p>
          <p className="month-text">{currentMonth}</p>
        </div>
      </div>
    </div>
  );
};

export default Dates;
