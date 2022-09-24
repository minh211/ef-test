import "./styles.css";
import DayContainer from "./components/DayContainer";
import data from "./utils/data.json";
import React, { useState } from "react";

export default function App() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging) => setIsDragging(dragging);

  return (
    <div className="wrapper">
      {data.map((item) => (
        <DayContainer
          key={item.id}
          dayOfWeek={item.id}
          dayOfMonth={item.dayOfMonth}
          data={item}
          isDragging={isDragging}
          handleDragging={handleDragging}
        />
      ))}
    </div>
  );
}
