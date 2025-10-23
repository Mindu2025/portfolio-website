import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpg"; // Add Mindu's image here

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img src={profileImg} alt="Mindu Wangmo" />
        </div>
        <h1>MINDU WANGMO</h1>
        <h2>IT Student</h2>
        <p>Passionate about Technology | Web & Software Development | Problem Solver</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/achievements")}>Explore Journey</button>
          <button onClick={() => navigate("/connect")}>Connect</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
