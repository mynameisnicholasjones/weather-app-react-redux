import React from 'react';
import PropTypes from 'prop-types';
// Imports for using Redux app level state inside a component
import { connect } from 'react-redux';
// Imports for Components
import Preloader from '../layout/Preloader';
import ForecastItem from './ForecastItem';

const FiveDayForecast = ({
  forecastReducerStateAsAProp: {
     fiveDayWeatherForecastArray,
     loading,
     showFiveDayForecastFlag
   },
}) => {
  // The user has not search for anything yet, so singleDayWeatherForecastObject is 'null' and there is nothing to show.
  if (fiveDayWeatherForecastArray === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      // Conditionally omit the className based on weather the showFiveDayForecastFlag is true or not.
      <div className={showFiveDayForecastFlag ? 'displayFiveDayForecast' : undefined}>
        {/* NOTE: The OpenWeatherMap.org API did not include a 'city: id' for the Five Day Forecast, which means that I have to use the 'last resort' of using the array index of each singleDayWeatherForecastObject as the key value */}
        {fiveDayWeatherForecastArray.map(
          (singleDayWeatherForecastObject, index) => (
            <ForecastItem
              singleDayWeatherForecastObject={singleDayWeatherForecastObject}
              // NOTE: There are no stable IDs for rendered items, so you may use the item index as a key as a last resort:
              key={index}
            />
          )
        )}
      </div>
    );
  }
};

FiveDayForecast.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps)(FiveDayForecast);
