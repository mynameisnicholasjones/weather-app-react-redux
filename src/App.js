import React, { useState } from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-container">
            <Alert />
            <Search />
            <WeatherHeader />

            <Switch>

              {/* Route for FiveDayForecast */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <FiveDayForecast />
                )}
              />

              {/* Route for CurrentDayForecast */}
              <Route
                exact
                path="/current-day-forecast"
                render={(props) => (
                  <CurrentDayForecast />
                )}
              />

              {/* Route for MoreDetailsSingleDayForecast */}
              <Route
                exact
                path="/more-details-single-day-forecast"
                render={(props) => (
                  <MoreDetailsSingleDayForecast />
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
