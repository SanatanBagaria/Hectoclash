// src/components/GameModeSelector.jsx
import React from "react";
import { gameSettings } from "../data/mockData";

const GameModeSelector = ({ onSelectMode, onSelectDifficulty }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Choose a Game Mode</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {gameSettings.modes.map(mode => (
          <div 
            key={mode.id}
            className="border rounded-lg p-4 hover:bg-blue-50 cursor-pointer transition"
            onClick={() => onSelectMode && onSelectMode(mode.id)}
          >
            <h3 className="text-xl font-semibold mb-2">{mode.name}</h3>
            <p className="text-gray-600">{mode.description}</p>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-bold mb-4">Select Difficulty</h3>
      <div className="flex space-x-4">
        {gameSettings.difficulties.map(diff => (
          <button
            key={diff.id}
            className="px-4 py-2 rounded border hover:bg-gray-100"
            onClick={() => onSelectDifficulty && onSelectDifficulty(diff.id)}
          >
            {diff.name} ({diff.timeLimit}s)
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameModeSelector;
