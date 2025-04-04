// src/pages/GameLobby.jsx
import React from "react";
import DuelArena from "../components/DuelArena";
import { mockPuzzles } from "../data/mockData";

const GameLobby = () => {
  // In a static version, we use the first puzzle from mock data
  const currentPuzzle = mockPuzzles[0];
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Game Lobby</h1>
      <DuelArena 
        mode="first-three"
        puzzle={currentPuzzle}
        timeRemaining={60}
        difficulty="Medium"
      />
    </div>
  );
};

export default GameLobby;
