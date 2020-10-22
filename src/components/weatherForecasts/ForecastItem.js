import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { getWeatherImage } from '../../helpers/helperFunctions';
// Imports for Components
import Preloader from '../layout/Preloader';

const ForecastItem = ({ singleDayWeatherForecastObject }) => {
  if (singleDayWeatherForecastObject === null) {
    return <Preloader />;
  } else {
    return (
      <div>
        {/* Day of the week */}
        <div>
          {/* Moment taking in a Unix Timestamp from the OpenWeatherMap.org API and formating the output to show the day of the week as a three letter day (ex. 'Sat') */}
          <Moment unix format="ddd">
              {singleDayWeatherForecastObject['dt']}
            </Moment>
        </div>

        {/* Weather Image */}
        <div>
          {getWeatherImage(singleDayWeatherForecastObject.weather[0].main)}
        </div>

        <div>
          {/* Weather Description */}
          <div>
            {singleDayWeatherForecastObject.weather[0].main}
          </div>
          {/* Weather Temperature */}
          <div>
            {Math.round(singleDayWeatherForecastObject.main.temp)} °F
          </div>

          {/* A 'Details" button */}
          <div>
            <button>
              Details
            </button>
          </div>
        </div>

      </div>
    )
  }
}

ForecastItem.propTypes = {
  singleDayWeatherForcastObject: PropTypes.object.isRequired,
}

export default ForecastItem
