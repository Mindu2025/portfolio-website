import React from "react";

const achievements = [
  { title: "Web Development Projects", description: "Built multiple web applications using React, HTML, CSS, and JS" },
  { title: "C Programming Assignments", description: "Implemented sorting algorithms and data structures in C" },
  { title: "Database Management", description: "Designed and managed MySQL databases for small projects" },
  { title: "Team Collaborations", description: "Worked effectively in team projects and hackathons" },
];

function Achievement() {
  return (
    <section className="achievement">
      <h2>Achievements</h2>
      <div className="achievement-list">
        {achievements.map((a, i) => (
          <div key={i} className="achievement-item">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievement;
