import React from 'react';
import { Link } from 'react-router-dom';
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
  if (userClickedWeatherForecastObject === null) {
    return null;
  } else if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="card">
        <div style={{ display: 'flex' }}>
          <div
            className="text-light"
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 'clamp(1.5rem, 6vw, 6rem)',
            }}
          >
            {/* Moment taking in a Unix Timestamp from the OpenWeatherMap.org API and formating the output to show the day of the week as a three letter day (ex. 'Sat') */}
            <Moment unix format="ddd">
              {userClickedWeatherForecastObject['dt']}
            </Moment>
          </div>

          <div
            style={{
              flex: '1',
              paddingRight: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {getWeatherImage(userClickedWeatherForecastObject.weather[0].main)}
          </div>

          <div
            className="text-light"
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 'clamp(1rem, 5vw, 2.2rem)' }}>
              {/* Weather Description:{' '} */}
              {userClickedWeatherForecastObject.weather[0].main}
            </div>
            <div style={{ fontSize: 'clamp(1rem, 5vw, 2.2rem)' }}>
              {/* Tempurature:{' '} */}
              {Math.round(userClickedWeatherForecastObject.main.temp)} °F
            </div>

            {/* Back Button */}
            <Link
              to="/"
              className="btn btn-dark btn-sm"
              style={{
                fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
                margin: '0.7em',
              }}
            >
              Back
            </Link>
          </div>
        </div>

        <div
          className="text-light"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderTop: 'solid 1px #ccc',
            marginTop: '1rem',
            paddingTop: '1rem',
            fontSize: 'clamp(1rem, 4vw, 2.2rem)',
          }}
        >
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
