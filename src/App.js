import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MatchCard from './components/MatchCard';
import Fixtures from './components/Fixtures';
import News from './components/News';
import About from './components/About';

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
    }
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center" }}>
              {matches.map((match, index) => (
                <MatchCard
                  key={index}
                  team1={match.team1}
                  team2={match.team2}
                  score={match.score}
                  status={match.status}
                />
              ))}
            </div>
          }
        />
        <Route path="/Fixtures" element={<Fixtures />} />
        <Route path="/News" element={<News />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
