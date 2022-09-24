import React from "react";
import Workout from "./Workout";
import work from "../utils/work.json";

const DayContainer = ({
  dayOfWeek,
  dayOfMonth,
  data,
  isDragging,
  handleDragging
}) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const d = new Date();
  let day = weekday[d.getDay()].toLowerCase().includes(dayOfWeek.toLowerCase());
  console.log("a", day);
  return (
    <div className="day-wrapper">
      <div className="day-of-week">{dayOfWeek}</div>
      <div className="day-content">
        <div className={`day-of-month ${day ? "bold" : ""}`}>{dayOfMonth}</div>
        {work.map(
          (item) =>
            data.id === item.position && (
              <Workout
                data={item}
                isDragging={isDragging}
                handleDragging={handleDragging}
              />
            )
        )}
      </div>
    </div>
  );
};

export default DayContainer;
