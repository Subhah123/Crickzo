import React from 'react';
import './MatchCard.css';

function MatchCard() {
  return (
    <div className="match-card">
      <div className="teams">
        <span className="team-name">IND</span>
        <span className="vs">vs</span>
        <span className="team-name">AUS</span>
      </div>
      <div className="score">
        India: 250/4 (45.2 ov)
      </div>
      <div className="status">LIVE • Chennai</div>
    </div>
  );
}

export default MatchCard;
