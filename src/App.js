import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Imported helper functions
import { getAPICallValueForOpenWeatherMapDotOrg } from './helpers/helperFunctions';
// Imported Components
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';

function App() {
  // loading data type is: bool
  const [loading, setLoading] = useState(false);
  // fiveDayWeatherForcastArray data type is: []
  const [fiveDayWeatherForcastArray, setFiveDayWeatherForcastArray] 
    = useState(null);
  // weatherLocation data type is: string
  const [weatherLocation, setWeatherLocation] = useState(null);

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

      setWeatherLocation(`${data.city.name}, ${data.city.country}`);

      // Store 5 days of weather data in an array. This will be used to display either the current-day forcast or the five-day forcast to the user.
      let fiveDayWeatherForcastTemporaryArray = [];

      data.list.forEach((weatherObject, index) => {
        // Get the first five weather objects that's index is divisible by 8
        // IMPORTANT NOTE: The OpenWeatherMap.org API returns 40 items (i.e. index 0 through 39). This means that you will always get only five values that divide into 8 without any remainder (i.e. 0, 8, 16, 24, and 32).
        // So it does not matter which time of day the database is quieried, you will always get the desired five weather objects.
        if (index % 8 === 0) {
          fiveDayWeatherForcastTemporaryArray.push(weatherObject);
        }
      });

      // Console log the five weather objects to verify that the data is being retrieved correctly.
      fiveDayWeatherForcastTemporaryArray.forEach((weatherObject, index) => {
        console.log(`Weather Object ${(index + 1)}: ${JSON.stringify(weatherObject)}`);
      })

      setFiveDayWeatherForcastArray(fiveDayWeatherForcastTemporaryArray);

      setLoading(false);
    };

    getWeatherForcastData(searchText);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-container">
          <Search />
        </main>
      </div>
    </Router>
  );
}

export default App;
