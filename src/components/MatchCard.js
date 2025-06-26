import React from 'react';
import './MatchCard.css';

function MatchCard({ team1, team2, score, status }) {
  return (
    <div className="match-card">
      <div className="teams">
        <span>{team1}</span> vs <span>{team2}</span>
      </div>
      <div className="score">{score}</div>
      <div className="status">{status}</div>
    </div>
  );
}

export default MatchCard;
