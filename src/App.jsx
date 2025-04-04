// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GameLobby from "./pages/GameLobby";
import ProfilePage from "./pages/ProfilePage";
import SinglePlayerPage from "./pages/SinglePlayerPage";
import { currentUser } from "./data/mockData";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar user={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameLobby />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/singleplayer" element={<SinglePlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
