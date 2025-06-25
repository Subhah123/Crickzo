import React from 'react';
import './MatchCard.css';

function MatchCard({ team1, team2, score, status }) {
  return (
    <div className="match-card">
      <div className="teams">
        <span className="team-name">{team1}</span>
        <span className="vs">vs</span>
        <span className="team-name">{team2}</span>
      </div>
      <div className="score">{score}</div>
      <div className="status">{status}</div>
    </div>
  );
}

export default MatchCard;
