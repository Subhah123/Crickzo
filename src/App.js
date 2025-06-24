import MatchCard from './MatchCard';
import Navbar from './Navbar';
import MatchCard from './MatchCard';  // 👈 Add this

function App() {
  return (
    <>
      <Navbar />
      <MatchCard />  {/* 👈 Render Match Card */}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome to Crickzo</h1>
        <p>Your live cricket update source.</p>
      </div>
    </>
  );
}

export default App;
