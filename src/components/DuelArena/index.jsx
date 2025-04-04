// src/components/DuelArena/index.jsx
import React from "react";
import Timer from "./Timer";
import PuzzleDisplay from "./PuzzleDisplay";
import SolutionInput from "./SolutionInput";
import OpponentStatus from "../OpponentStatus";

const DuelArena = ({ mode, puzzle, timeRemaining, difficulty }) => {
  // This would be state in the interactive version
  const solutionValue = "";
  
  // These would be handlers in the interactive version
  const handleSolutionChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {mode === "first-three" ? "First Three" : 
           mode === "time-attack" ? "Time Attack" : "Reverse Hectoc"}
        </h2>
        <div className="text-sm bg-gray-200 px-2 py-1 rounded">
          Difficulty: {difficulty}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Timer seconds={timeRemaining} />
          <PuzzleDisplay puzzle={puzzle} mode={mode} />
          <SolutionInput 
            value={solutionValue}
            onChange={handleSolutionChange}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <OpponentStatus name="NumberNinja" progress={65} />
        </div>
      </div>
    </div>
  );
};

export default DuelArena;
