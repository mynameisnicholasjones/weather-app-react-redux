import React from 'react';
import PropTypes from 'prop-types';
// Imports for Components
import Preloader from '../layout/Preloader';
import ForecastItem from './ForecastItem';

const FiveDayForecast = ({
  fiveDayWeatherForecastArray,
  loading,
  showFiveDayForecastFlag,
  getUserClickedWeatherForecastObject,
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
              showFiveDayForecastFlag={showFiveDayForecastFlag}
              getUserClickedWeatherForecastObject={getUserClickedWeatherForecastObject}
            />
          )
        )}
      </div>
    );
  }
};

FiveDayForecast.propTypes = {
  fiveDayWeatherForecastArray: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default FiveDayForecast;
