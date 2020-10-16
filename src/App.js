import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Imported Components
import Navbar from './components/layout/Navbar';

function App() {
  // App Component Level StateS
  const [loading, setLoading] = useState(false);

  // TODO: use the useEffect hook to create a function that will automatically retrieve weather data from OpenWeatherMap.org as soon as the app is loaded. This will provide default weather data to display to the user. 
  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
