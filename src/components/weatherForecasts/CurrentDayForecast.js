import React from 'react';
import Preloader from '../layout/Preloader';

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
      // Output the weather description.
      // TODO: Update this to output a ForecastItem component.
      fiveDayWeatherForecastArray[0].weather[0].main
    );
  }
};

export default CurrentDayForecast;
