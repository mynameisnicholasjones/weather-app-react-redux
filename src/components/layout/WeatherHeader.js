import React from 'react';
import PropTypes from 'prop-types';
import Preloader from './Preloader';

const WeatherHeader = ({ weatherLocation, loading }) => {
  // The user has not search for anything yet, so show the default location of 'New York, US'.
  if (loading) {
    return <Preloader />;
  } else {
    return <div className="text-light">{weatherLocation}</div>;
  }
};

WeatherHeader.propTypes = {
  weatherLocation: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default WeatherHeader;
