import "./dates.css";
import React from "react";

const Dates = (props) => {
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
        {days.map((item, index) => {
          return (
            <div
              onClick={() => {
                props.onChange(index);
              }}
              key={item}
              className="date"
            >
              <p className="day-text">{item}</p>
              <p className="month-text">{currentMonth}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dates;
