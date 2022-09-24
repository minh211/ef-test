import React, { useState } from "react";
import Plus from "./icons/Plus";
import ThreeDot from "./icons/ThreeDot";
import Exercise from "./Exercise";

const Workout = ({ data, hasItem, onSelect, isDragging, handleDragging }) => {
  const handleDragEnd = () => handleDragging(false);
  return (
    <div className="workout-wrapper" draggable onDragEnd={handleDragEnd}>
      {hasItem && <dragDrop />}
      <div className="workout-box-title">
        <div className="workout-title">{data.title}</div>
        <ThreeDot />
      </div>

      <div className="workout-content">
        {data.exercise.map((item) => (
          <Exercise
            title={item.title}
            detail={item.detail}
            number={item.number}
          />
        ))}
      </div>
      <button className="workout-button" type="button">
        <Plus />
      </button>
    </div>
  );
};

export default Workout;
