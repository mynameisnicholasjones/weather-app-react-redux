import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Imports for Components
import Preloader from './Preloader';

const WeatherHeader = ({
  forecastReducerStateAsAProp: { loading, weatherForecastLocation },
}) => {
  if (weatherForecastLocation === null) {
    // The user has not search for anything yet, so weather is 'null' and there is nothing to show.
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return <div className="weatherHeader text-light">{weatherForecastLocation}</div>;
  }
};

WeatherHeader.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps)(WeatherHeader);