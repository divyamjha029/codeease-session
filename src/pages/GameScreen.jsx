import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="app-center">
      <div className="glass-card game-card">
        <header className="game-header">
          <h1 className="game-title">Adventure Mode</h1>
          <div className="difficulty">Difficulty: <span className="badge">{difficulty}</span></div>
        </header>

        <main className="game-main">
          <p className="small-muted">This is where your game UI will live — have fun building it out!</p>
          <div className="play-area">
            <div className="play-placeholder">🎮 Game Canvas</div>
          </div>
        </main>

        <footer className="game-footer">
          <button className="button" onClick={() => navigate(-1)}>Back</button>
        </footer>
      </div>
    </div>
  );
};

export default GameScreen;
