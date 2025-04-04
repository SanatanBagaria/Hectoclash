// src/components/Profile/UserStats.jsx
import React from "react";

const UserStats = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Player Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-2 bg-gray-50 rounded">
          <div className="text-2xl font-bold">{user.wins}</div>
          <div className="text-sm text-gray-600">Wins</div>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded">
          <div className="text-2xl font-bold">{user.losses}</div>
          <div className="text-sm text-gray-600">Losses</div>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded">
          <div className="text-2xl font-bold">{user.score}</div>
          <div className="text-sm text-gray-600">Total Score</div>
        </div>
        <div className="text-center p-2 bg-gray-50 rounded">
          <div className="text-2xl font-bold">
            {Math.round((user.wins / (user.wins + user.losses)) * 100)}%
          </div>
          <div className="text-sm text-gray-600">Win Rate</div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6 mb-2">Recent Games</h3>
      <div className="space-y-2">
        {user.recentGames.map((game, index) => (
          <div key={index} className={`p-2 rounded ${game.result === 'win' ? 'bg-green-100' : 'bg-red-100'}`}>
            <div className="flex justify-between">
              <span>vs {game.opponent}</span>
              <span>{game.result === 'win' ? 'Won' : 'Lost'}</span>
            </div>
            <div className="text-sm text-gray-600">{game.date} • Score: {game.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;
