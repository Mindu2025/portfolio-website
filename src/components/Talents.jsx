import React from "react";

const talents = [
  { name: "Web Development", level: 90 },
  { name: "C Programming", level: 85 },
  { name: "Database Management", level: 80 },
  { name: "Problem Solving", level: 95 },
  { name: "Team Collaboration", level: 90 },
  { name: "Learning New Tech", level: 88 }
];

function Talents() {
  return (
    <section className="talents">
      <h2>Talents & Skills</h2>
      <div className="talent-list">
        {talents.map((t, i) => (
          <div key={i} className="talent-item">
            <span>{t.name}</span>
            <div className="talent-bar">
              <div className="talent-level" style={{ width: `${t.level}%` }}></div>
            </div>
            <span>{t.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Talents;
