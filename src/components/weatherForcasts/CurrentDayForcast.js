import React from 'react';
import Preloader from '../layout/Preloader';

const CurrentDayForcast = ({
  fiveDayWeatherForcastArray,
  loading,
}) => {
  // The user has not search for anything yet, so fiveDayWeatherForcastArray is 'null' and there is nothing to show.
  if (fiveDayWeatherForcastArray === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      // Output the weather description.
      // TODO: Update this to output a ForcastItem component.
      fiveDayWeatherForcastArray[0].weather[0].main
    );
  }
};

export default CurrentDayForcast;
