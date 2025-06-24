import React from 'react';
import Navbar from './components/Navbar';
import MatchCard from './components/MatchCard';

function App() {
  const matches = [
    {
      team1: 'IND',
      team2: 'AUS',
      score: 'India: 250/4 (45.2 ov)',
      status: 'LIVE • Chennai',
    },
    {
      team1: 'PAK',
      team2: 'ENG',
      score: 'Pakistan: 198/6 (35 ov)',
      status: 'LIVE • Lahore',
    },
  ];

  return (
    <>
      <Navbar />
      {matches.map((match, index) => (
        <MatchCard
          key={index}
          team1={match.team1}
          team2={match.team2}
          score={match.score}
          status={match.status}
        />
      ))}
    </>
  );
}

export default App;
