import React from 'react'
import PropTypes from 'prop-types';
import { getWeatherImage } from '../../helpers/helperFunctions';
// Imports for Components
import Preloader from '../layout/Preloader';

const ForecastItem = ({ singleDayWeatherForcastObject }) => {
  if (singleDayWeatherForcastObject === null) {
    return <Preloader />;
  } else {
    return (
      // TODO: Update component to display:
      // Day of the week
      // Weather Image
      // Weather Description
      // Weather Temperature
      // A 'Details" button
      <div>
        {getWeatherImage(singleDayWeatherForcastObject.weather[0].main)}
      </div>
    )
  }
}

ForecastItem.propTypes = {
  singleDayWeatherForcastObject: PropTypes.object.isRequired,
}

export default ForecastItem
