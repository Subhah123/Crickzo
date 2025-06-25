// App.js
import React from 'react';
import Futures from './Components/Futures';
import News from './Components/News';
import About from './Components/About';

function App() {
  return (
    <div>
      <h1>Welcome to Crickzo</h1>
      <Futures />
      <News />
      <About />
    </div>
  );
}

export default App;
