// src/components/DuelArena/SolutionInput.jsx
import React from "react";

const SolutionInput = ({ value, onChange, onSubmit }) => {
  return (
    <div className="mt-4">
      <input 
        type="text" 
        value={value} 
        onChange={onChange}
        placeholder="Enter your solution (e.g., 1+2*3+4+5*6)" 
        className="w-full p-2 border rounded mb-2"
      />
      <button 
        onClick={onSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit Solution
      </button>
    </div>
  );
};

export default SolutionInput;
