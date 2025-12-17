import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="app-center">
      <div className="hero">
        <div className="hero-left card">
          <h1 className="title">Welcome to the Game!</h1>
          <p className="subtitle">Select your difficulty level to start:</p>

          <div className="buttonContainer">
            <button className="button" onClick={() => handleDifficultySelect("Easy")}>Easy</button>
            <button className="button" onClick={() => handleDifficultySelect("Medium")}>Medium</button>
            <button className="button" onClick={() => handleDifficultySelect("Hard")}>Hard</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="art">
            <div className="fun-blob" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
