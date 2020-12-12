import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// NOTE: Whenever you call an action from a component, you have to import that action
import { getShowFiveDayForecastFlagAction } from '../../actions/forecastActions';

const Navbar = ({ getShowFiveDayForecastFlagAction }) => {
  const onClickToggleActiveForecastButton = (event) => {
    const currentDayForecastBtn = document.getElementById('current-day-forecast-btn');
    const fiveDayForecastBtn = document.getElementById('five-day-forecast-btn');

    if (event.target.id === 'current-day-forecast-btn') {
      currentDayForecastBtn.className = 'btn btn-active';
      fiveDayForecastBtn.className = 'btn btn-not-active';

      // Get the Boolean value to determine if the single-day forecast should be displayed or the five-day forecast should be displayed
      getShowFiveDayForecastFlagAction(false);
    } else {
      fiveDayForecastBtn.className = 'btn btn-active';
      currentDayForecastBtn.className = 'btn btn-not-active';

      // Get the Boolean value to determine if the single-day forecast should be displayed or the five-day forecast should be displayed
      getShowFiveDayForecastFlagAction(true);
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

Navbar.propTypes = {
  getShowFiveDayForecastFlagAction: PropTypes.func.isRequired,
};

// NOTE: Since mapStateToProps is not used in this component, the
// first arguement for connect is null.
export default connect(null, {getShowFiveDayForecastFlagAction})(Navbar);
