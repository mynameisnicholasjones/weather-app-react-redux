import React, { useState, useEffect } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Imported helper functions
import { getAPICallValueForOpenWeatherMapDotOrg } from './helpers/helperFunctions';
// Imported Components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/layout/Search';
import WeatherHeader from './components/layout/WeatherHeader';
import CurrentDayForecast from './components/weatherForecasts/CurrentDayForecast';
import FiveDayForecast from './components/weatherForecasts/FiveDayForecast';

function App() {
  // Alert data type is: {}
  const [alert, setAlert] = useState(null);
  // loading data type is: bool
  const [loading, setLoading] = useState(false);
  // fiveDayWeatherForecastArray data type is: []
  const [fiveDayWeatherForecastArray, setFiveDayWeatherForecastArray]
    = useState(null);
  // NOTE: showFiveDayForecast data type is: Boolean
  const [showFiveDayForecastFlag, setShowFiveDayForecastFlag] = useState(null);
  // weatherLocation data type is: string
  const [weatherLocation, setWeatherLocation] = useState(null);

  useEffect(() => {
    // Location to get weather data for.
    const searchText = 'New York, US';

    // Call getWeatherForecastData one time as soon as the component loads.
    // This weather data will be output when the app initially loads in order to give the user default weather data.
    getWeatherForecastData(searchText);
  }, []);

  // This function gets the value to be used in showFiveDayForecastFlag and
  // then sets showFiveDayForecastFlag to that value.
  const getShowFiveDayForecastFlag = (ShowFiveDayForecastFlagBooleanValue) => {
    setShowFiveDayForecastFlag(ShowFiveDayForecastFlagBooleanValue);
  };

  // This function searches for weather data based a given location. Ex: 'New York, US'.
  const getWeatherForecastData = async (searchText) => {
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

      showAlert(`Unable to find location: "${searchText}". Please try again.`, 'danger');

    } else {
      console.log(`The weather data for ${data.city.name}, ${data.city.country} is: ${JSON.stringify(data)}`);

      setWeatherLocation(`${data.city.name}, ${data.city.country}`);

      // Store 5 days of weather data in an array. This will be used to display either the current-day forecast or the five-day forecast to the user.
      let fiveDayWeatherForecastTemporaryArray = [];

      data.list.forEach((weatherObject, index) => {
        // Get the first five weather objects that's index is divisible by 8
        // IMPORTANT NOTE: The OpenWeatherMap.org API returns 40 items (i.e. index 0 through 39). This means that you will always get only five values that divide into 8 without any remainder (i.e. 0, 8, 16, 24, and 32).
        // So it does not matter which time of day the database is quieried, you will always get the desired five weather objects.
        if (index % 8 === 0) {
          fiveDayWeatherForecastTemporaryArray.push(weatherObject);
        }
      });

      // Console log the five weather objects to verify that the data is being retrieved correctly.
      fiveDayWeatherForecastTemporaryArray.forEach((weatherObject, index) => {
        console.log(`Weather Object ${(index + 1)}: ${JSON.stringify(weatherObject)}`);
      })

      setFiveDayWeatherForecastArray(fiveDayWeatherForecastTemporaryArray);
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
        <Navbar getShowFiveDayForecastFlag={getShowFiveDayForecastFlag} />
        <main className="main-container">
          <Alert alert={alert} />
          <Search
            showAlert={showAlert}
            getWeatherForecastData={getWeatherForecastData}
          />
          <WeatherHeader
            weatherLocation={weatherLocation}
            loading={loading}
          />

          <Switch>

            {/* Route for FiveDayForecast */}
            <Route
              exact
              path="/"
              render={(props) => (
                <FiveDayForecast
                  fiveDayWeatherForecastArray={fiveDayWeatherForecastArray}
                  loading={loading}
                  showFiveDayForecastFlag={showFiveDayForecastFlag}
                />
              )}
            />

            {/* Route for CurrentDayForecast */}
            <Route
              exact
              path="/current-day-forecast"
              render={(props) => (
                <CurrentDayForecast
                  fiveDayWeatherForecastArray={fiveDayWeatherForecastArray}
                  loading={loading}
                  showFiveDayForecastFlag={showFiveDayForecastFlag}
                />
              )}
            />

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
