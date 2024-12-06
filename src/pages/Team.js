import React from 'react';
import '../css/Team.css';

function Team() {
  return (
    <div className="main-content">
    <div className="Team">
      <header className="Team-header">
        <h1>Dechro</h1>
        <p>We are passionate about delivering innovative Idea's!</p>
      </header>
      <section className="team-section">
      <div className="team-member">
          <img src="team2.jpg" alt="Team Member " />
          <h3>Dhanapal R</h3>
          <p>Digital Markating</p>
        </div>
        <div className="team-member">
          <img src="team1.jpg" alt="Team Member" />
          <h3>Bose S M</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-member">
          <img src="team2.jpg" alt="Team Member" />
          <h3>Lokananthan A</h3>
          <p>Full Stack Developer</p>
        </div>
        <div className="team-member">
          <img src="team2.jpg" alt="Team Member " />
          <h3>Nithyasree T</h3>
          <p>Full Stack Developer</p>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Team;
