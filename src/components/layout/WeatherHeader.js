import React from 'react';
import PropTypes from 'prop-types';
// Imports for Components
import Preloader from './Preloader';

const WeatherHeader = ({ weatherLocation, loading }) => {
  if (weatherLocation === null) {
    // The user has not search for anything yet, so weather is 'null' and there is nothing to show.
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return <div className="weatherHeader text-light">{weatherLocation}</div>;
  }
};

WeatherHeader.propTypes = {
  weatherLocation: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default WeatherHeader;