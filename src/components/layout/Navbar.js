import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const onClickToggleActiveForecastButton = (event) => {
    const currentDayForecastBtn = document.getElementById(
      'current-day-forecast-btn'
    );
    const fiveDayForecastBtn = document.getElementById('five-day-forecast-btn');

    if (event.target.id === 'current-day-forecast-btn') {
      currentDayForecastBtn.className = 'btn btn-active';
      fiveDayForecastBtn.className = 'btn btn-not-active';

      console.log('The Current Day Forecast Button is Active');
    } else {
      fiveDayForecastBtn.className = 'btn btn-active';
      currentDayForecastBtn.className = 'btn btn-not-active';

      console.log('The Five Day Forecast Button is Active');
    }
  };

  return (
    <header className="bg-primary">
      <div className="navbar-container">
        <h1 className="logo">
          <img
            src="../../.././appIcons/CloudsIcon.png"
            alt="Cloud Icon"
            className='logo__cloudIcon'
          />
          <div className='logo__weatherAppName'>
            Weather App
          </div>
        </h1>

        <nav className="forecast-type-nav">
          <Link
            id="five-day-forecast-btn"
            to="/"
            className="btn btn-active"
            onClick={onClickToggleActiveForecastButton}
          >
            Five-Day Forecast
          </Link>
          <Link
            id="current-day-forecast-btn"
            to="/current-day-forecast"
            className="btn btn-not-active"
            onClick={onClickToggleActiveForecastButton}
          >
            Current-Day Forecast
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
