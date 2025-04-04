// src/components/DuelArena/SolutionInput.jsx
import React from "react";

const SolutionInput = ({ value, onChange, onSubmit, disabled = false }) => {
  return (
    <div className="mt-4">
      <input 
        type="text" 
        value={value} 
        onChange={onChange}
        placeholder="Enter your solution (e.g., 1+2*3+4+5*6)" 
        className="w-full p-2 border rounded mb-2"
        disabled={disabled}
      />
      <button 
        onClick={onSubmit}
        className={`w-full py-2 rounded ${
          disabled 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        } text-white`}
        disabled={disabled}
      >
        Submit Solution
      </button>
    </div>
  );
};

export default SolutionInput;
