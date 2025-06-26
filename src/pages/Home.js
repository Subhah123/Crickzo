import React from 'react';
import MatchCard from '../components/MatchCard';

const matches = [
  {
    team1: 'IND',
    team2: 'AUS',
    score: 'IND 250/4 (45.2 ov)',
    status: 'LIVE • Chennai',
  },
  {
    team1: 'PAK',
    team2: 'ENG',
    score: 'PAK 198/6 (35 ov)',
    status: 'LIVE • Lahore',
  },
];

function Home() {
  return (
    <div className="home" style={{ textAlign: 'center' }}>
      {matches.map((match, index) => (
        <MatchCard key={index} {...match} />
      ))}
    </div>
  );
}

export default Home;
