import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import {
  getWeatherImage,
} from '../../helpers/helperFunctions';
// Imports for Components
import Preloader from '../layout/Preloader';

const MoreDetailsSingleDayForecast = ({
  userClickedWeatherForecastObject,
  loading,
}) => {
  // Use the useHistory hook from react-router-dom to make clicking the back button go to the previous page.
  const history = useHistory();

  const onClickGoToPreviousPage = () => {
    history.goBack();
  };

  if (userClickedWeatherForecastObject === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="card">

        <div className="moreDetailsSingleDayForecastContainer">

          <div className="dayOfTheWeek text-light">
            {/* Moment taking in a Unix Timestamp from the OpenWeatherMap.org API and formating the output to show the day of the week as a three letter day (ex. 'Sat') */}
            <Moment unix format="ddd">
              {userClickedWeatherForecastObject['dt']}
            </Moment>
          </div>

          <div className="weatherImage">
            {getWeatherImage(userClickedWeatherForecastObject.weather[0].main)}
          </div>

          <div className="weatherDetails text-light">
            <div className="weatherDetails__weatherDescription">
              {/* Weather Description:{' '} */}
              {userClickedWeatherForecastObject.weather[0].main}
            </div>
            <div className="weatherDetails__weatherTemp">
              {/* Tempurature:{' '} */}
              {Math.round(userClickedWeatherForecastObject.main.temp)} °F
            </div>

            {/* Back Button */}
            <button
              className="weatherBack__detailsBtn btn btn-dark btn-sm"
              onClick={onClickGoToPreviousPage}
            >
              Back
            </button>
          </div>
        </div>

        <div className="moreWeatherDetails text-light">
          <div>
            Feels Like:{' '}
            {Math.round(userClickedWeatherForecastObject.main.feels_like)} °F
          </div>
          <div>
            Humidity:{' '}
            {Math.round(userClickedWeatherForecastObject.main.humidity)} %
          </div>
          <div>
            Wind Speed: {Math.round(userClickedWeatherForecastObject.wind.speed)}{' '}
            mph
          </div>
          <div>
            {/* Atmospheric pressure (on the sea level, if there is no
              sea_level or grnd_level data), hPa */}
            Pressure: {userClickedWeatherForecastObject.main.pressure} hPa
          </div>
        </div>

      </div>
    );
  }
};

export default MoreDetailsSingleDayForecast;
