import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Imported Components
import Navbar from './components/layout/Navbar';

function App() {
  // App Component Level State
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
