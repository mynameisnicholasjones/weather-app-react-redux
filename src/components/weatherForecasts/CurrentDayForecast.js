import React from 'react';
import PropTypes from 'prop-types';
// Imports for Components
import Preloader from '../layout/Preloader';
import ForecastItem from '../weatherForecasts/ForecastItem';

const CurrentDayForecast = ({
  fiveDayWeatherForecastArray,
  loading,
}) => {
  // The user has not search for anything yet, so fiveDayWeatherForecastArray is 'null' and there is nothing to show.
  if (fiveDayWeatherForecastArray === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      <ForecastItem
        // Get the current day weather forcast object from the first element in the fiveDayWeatherForcastArray
        singleDayWeatherForcastObject={fiveDayWeatherForecastArray[0]}
      />
    );
  }
};

CurrentDayForecast.propTypes = {
  fiveDayWeatherForecastArray: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default CurrentDayForecast;
