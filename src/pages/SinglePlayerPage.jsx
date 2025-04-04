import React, { useState } from "react";
import SinglePlayerMode from "../components/SinglePlayerMode";
import { gameSettings } from "../data/mockData";

const SinglePlayerPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [customTime, setCustomTime] = useState(60);
  const [timeLimit, setTimeLimit] = useState(null);
  
  const handleStartGame = (difficultyId, time) => {
    setSelectedDifficulty(difficultyId);
    setTimeLimit(time);
  };
  
  const handleCustomTimeChange = (e) => {
    const value = parseInt(e.target.value) || 60;
    setCustomTime(Math.min(Math.max(value, 10), 300)); // Clamp between 10 and 300
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Single Player Mode</h1>
      
      {!selectedDifficulty ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Select Difficulty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {gameSettings.difficulties.map(diff => (
              <button
                key={diff.id}
                className="p-4 border rounded-lg hover:bg-blue-50 transition"
                onClick={() => handleStartGame(diff.id, diff.timeLimit)}
              >
                <h3 className="text-xl font-semibold mb-2">{diff.name}</h3>
                <p className="text-gray-600">Time: {diff.timeLimit} seconds</p>
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Time</h3>
            <div className="flex items-center">
              <input
                type="number"
                min="10"
                max="300"
                value={customTime}
                onChange={handleCustomTimeChange}
                className="w-24 p-2 border rounded text-center mr-4"
              />
              <span className="mr-4">seconds</span>
              <button
                onClick={() => handleStartGame("custom", customTime)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Start with Custom Time
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SinglePlayerMode 
          difficulty={selectedDifficulty} 
          initialTimeLimit={timeLimit}
        />
      )}
    </div>
  );
};

export default SinglePlayerPage;
