import React from "react";

const Exercise = ({ title, detail, number }) => {
  return (
    <div className="exercise-wrapper">
      <div className="exercise-title">{title}</div>
      <div className="exercise-content">
        <div className="exercise-left">{number}x</div>
        <div className="exercise-right">{detail}</div>
      </div>
    </div>
  );
};

export default Exercise;
