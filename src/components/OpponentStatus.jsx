// src/components/OpponentStatus.jsx
import React from "react";

const OpponentStatus = ({ name, progress }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Opponent: {name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
        <div 
          className="bg-green-500 h-4 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-sm text-gray-600 text-right">{progress}% complete</div>
    </div>
  );
};

export default OpponentStatus;
