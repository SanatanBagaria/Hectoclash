// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import GameModeSelector from "../components/GameModeSelector";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to HectoClash</h1>
        <p className="text-xl text-gray-600 mb-8">
          The ultimate mental math dueling platform
        </p>
        <Link 
          to="/game" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Playing
        </Link>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Choose a Game Mode</h3>
            <p>Select from three exciting game modes: First Three, Time Attack, or Reverse Hectoc.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Solve Puzzles</h3>
            <p>Use mathematical operations to make the given digits equal to 100.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Compete & Win</h3>
            <p>Beat your opponents, climb the leaderboard, and earn badges!</p>
          </div>
        </div>
      </div>
      
      <GameModeSelector />
    </div>
  );
};

export default Home;
