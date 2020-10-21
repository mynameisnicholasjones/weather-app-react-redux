import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router } from 'react-router-dom';
// Imported helper functions
import { getAPICallValueForOpenWeatherMapDotOrg } from './helpers/helperFunctions';
// Imported Components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/layout/Search';
import WeatherHeader from './components/layout/WeatherHeader';
import CurrentDayForcast from './components/weatherForcasts/CurrentDayForcast';

function App() {
  // Alert data type is: {}
  const [alert, setAlert] = useState(null);
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

    // Call getWeatherForcastData one time as soon as the component loads.
    // This weather data will be output when the app initially loads in order to give the user default weather data.
    getWeatherForcastData(searchText);
  }, []);

  // This function searches for weather data based a given location. Ex: 'New York, US'. 
  const getWeatherForcastData = async (searchText) => {
    setLoading(true);

    // Determine which API call to make
    const apiCallValue = getAPICallValueForOpenWeatherMapDotOrg(searchText);

    // Make the fetch Get request
    const res = await fetch(apiCallValue);

    // Format the res into the data
    const data = await res.json();

    // Handle the error if api did not find the city the user searched for.
    if (data.message === 'city not found') {
      console.log('city not found');

      showAlert('Location was not found! Please enter a location.', 'danger');

    } else {
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
    }

    setLoading(false);
  };

  // When showAlert is called, the alert is set and then removed after 5 seconds.
  const showAlert = (alertText, alertType) => {
    setAlert({ alertText: alertText, alertType: alertType });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-container">
          <Alert alert={alert} />
          <Search
            showAlert={showAlert} 
            getWeatherForcastData={getWeatherForcastData}
          />
          <WeatherHeader
            weatherLocation={weatherLocation}
            loading={loading}
          />
          <CurrentDayForcast
            fiveDayWeatherForcastArray={fiveDayWeatherForcastArray}
            loading={loading}
          />
        </main>
      </div>
    </Router>
  );
}

export default App;
