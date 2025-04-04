// src/components/DuelArena/Timer.jsx
import React from "react";

const Timer = ({ seconds }) => {
  return (
    <div className="text-center mb-4">
      <div className="text-3xl font-bold">{seconds}s</div>
      <div className="text-sm text-gray-600">Time Remaining</div>
    </div>
  );
};

export default Timer;
