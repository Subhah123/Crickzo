import React from 'react';
import Navbar from './components/Navbar';
import MatchCard from './components/MatchCard';

function App() {
  return (
    <div>
      <Navbar />
      <MatchCard />
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Crickzo</h1>
      </div>
    </div>
  );
}

export default App;
