import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Imports for Components
import Preloader from '../layout/Preloader';
import ForecastItem from '../weatherForecasts/ForecastItem';

const CurrentDayForecast = ({
  forecastReducerStateAsAProp: {
    fiveDayWeatherForecastArray,
    loading,
  },
}) => {
  // The user has not search for anything yet, so fiveDayWeatherForecastArray is 'null' and there is nothing to show.
  if (fiveDayWeatherForecastArray === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      <ForecastItem
        // Get the current day weather forecast object from the first element in the fiveDayWeatherForcastArray
        singleDayWeatherForecastObject={fiveDayWeatherForecastArray[0]}
      />
    );
  }
};

CurrentDayForecast.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps)(CurrentDayForecast);
