import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Achievement from "./components/Achievement.jsx";
import Talents from "./components/Talents.jsx";
import Connect from "./components/Connect.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
