// src/pages/ProfilePage.jsx
import React from "react";
import Profile from "../components/Profile";
import Leaderboard from "../components/Leaderboard";
import { currentUser, mockUsers } from "../data/mockData";

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{currentUser.name}'s Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Profile user={currentUser} />
        </div>
        <div>
          <Leaderboard leaders={mockUsers} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
