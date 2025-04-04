// src/components/Profile/index.jsx
import React from "react";
import UserStats from "./UserStats";
import BadgeCollection from "./BadgeCollection";

const Profile = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <UserStats user={user} />
      </div>
      <div>
        <BadgeCollection badges={user.badges} />
      </div>
    </div>
  );
};

export default Profile;
