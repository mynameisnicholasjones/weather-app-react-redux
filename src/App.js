import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Imported helper functions
import { getAPICallValueForOpenWeatherMapDotOrg } from './helpers/helperFunctions';
// Imported Components
import Navbar from './components/layout/Navbar';

function App() {
  // App Component Level StateS
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // Location to get weather data for.
    const searchText = 'New York, US';

    // This function searches for weather data based a given location. Ex: 'New York, US'. 
    // This weather data will be output when the app initially loads in order to give the user default weather data.
    const getWeatherForcastData = async (searchText) => {
      setLoading(true);

      // Determine which API call to make
      const apiCallValue = getAPICallValueForOpenWeatherMapDotOrg(searchText);

      // Make the fetch Get request
      const res = await fetch(apiCallValue);

      // Format the res into the data
      const data = await res.json();

      console.log(`The weather data for ${data.city.name}, ${data.city.country} is: ${JSON.stringify(data)}`);

      // TODO: 
        // 1.) Update function to store the city and country of the weather location using component state.
        // 2.) Update function to store 5 days of weather data in an array to be used in displaying the weather data to the user.

      setLoading(false);
    };

    getWeatherForcastData(searchText);
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
