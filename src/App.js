import React, { useState } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Imported helper functions
import { getAPICallValueForOpenWeatherMapDotOrg } from './helpers/helperFunctions';
// Imports for Redux
import { Provider } from 'react-redux';
import store from './store';
// Imported Components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/layout/Search';
import WeatherHeader from './components/layout/WeatherHeader';
import CurrentDayForecast from './components/weatherForecasts/CurrentDayForecast';
import FiveDayForecast from './components/weatherForecasts/FiveDayForecast';
import MoreDetailsSingleDayForecast from './components/pages/MoreDetailsSingleDayForecast';

function App() {
  // NOTE: userClickedWeatherForecastObject data type is: {}
  const [userClickedWeatherForecastObject, setUserClickedWeatherForecastObject] = useState(null);

  // This function sets the userClickedWeatherForecastObject state to be
  // equal to the single day weather forecast object that the user clicked on.
  const getUserClickedWeatherForecastObject = (singleDayWeatherForecastObject) => {
    setUserClickedWeatherForecastObject(singleDayWeatherForecastObject);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-container">
            <Alert />
            <Search />
            <WeatherHeader
              weatherLocation={weatherLocation}
            />

            <Switch>

              {/* Route for FiveDayForecast */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <FiveDayForecast
                    getUserClickedWeatherForecastObject={
                      getUserClickedWeatherForecastObject
                    }
                  />
                )}
              />

              {/* Route for CurrentDayForecast */}
              <Route
                exact
                path="/current-day-forecast"
                render={(props) => (
                  <CurrentDayForecast
                    getUserClickedWeatherForecastObject={
                      getUserClickedWeatherForecastObject
                    }
                  />
                )}
              />

              {/* Route for MoreDetailsSingleDayForecast */}
              <Route
                exact
                path="/more-details-single-day-forecast"
                render={(props) => (
                  <MoreDetailsSingleDayForecast
                    userClickedWeatherForecastObject={
                      userClickedWeatherForecastObject
                    }
                  />
                )}
              />

            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
