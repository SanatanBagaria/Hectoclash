// src/components/Profile/BadgeCollection.jsx
import React from "react";

const BadgeCollection = ({ badges }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Badges Earned</h2>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center p-2 bg-yellow-50 rounded border border-yellow-200">
            <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-yellow-700">🏆</span>
            </div>
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeCollection;
