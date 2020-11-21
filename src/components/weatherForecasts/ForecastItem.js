import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getWeatherImage } from '../../helpers/helperFunctions';
// Imports for using Redux app level state inside a component
import { connect } from 'react-redux';
// NOTE: Whenever you call an action from a component, you have to import that action
import { getUserClickedWeatherForecastObjectAction } from '../../actions/forecastActions';
// Imports for Components
import Preloader from '../layout/Preloader';

const ForecastItem = ({
  forecastReducerStateAsAProp: { showFiveDayForecastFlag },
  getUserClickedWeatherForecastObjectAction,
  singleDayWeatherForecastObject,
}) => {
  const onClickGetUserClickedWeatherForecastObject = () => {
    getUserClickedWeatherForecastObjectAction(singleDayWeatherForecastObject);
  };

  if (singleDayWeatherForecastObject === null) {
    return <Preloader />;
  } else {
    return (
      <div
        className={
          showFiveDayForecastFlag ?
            'singleDayWeatherInfoContainer__fiveDayForecast card' :
            'singleDayWeatherInfoContainer__currentDayForecast card'
        }
      >
        {/* Day of the week */}
        <div className='dayOfTheWeek text-light'>
          {/* Moment taking in a Unix Timestamp from the OpenWeatherMap.org API and formating the output to show the day of the week as a three letter day (ex. 'Sat') */}
          <Moment unix format="ddd">
              {singleDayWeatherForecastObject['dt']}
            </Moment>
        </div>

        {/* Weather Image */}
        <div className="weatherImage">
          {getWeatherImage(singleDayWeatherForecastObject.weather[0].main)}
        </div>

        <div className="weatherDetails text-light">
          {/* Weather Description */}
          <div className="weatherDetails__weatherDescription">
            {singleDayWeatherForecastObject.weather[0].main}
          </div>

          {/* Weather Temperature */}
          <div className="weatherDetails__weatherTemp">
            {Math.round(singleDayWeatherForecastObject.main.temp)} °F
          </div>

          {/* A 'Details" button */}
          <Link
            to="/more-details-single-day-forecast"
            className="weatherDetails__detailsBtn btn btn-dark btn-sm my-1"
            onClick={onClickGetUserClickedWeatherForecastObject}
          >
            Details
          </Link>
        </div>

      </div>
    )
  }
}

ForecastItem.propTypes = {
  forecastReducerStateAsAProp: PropTypes.object.isRequired,
  singleDayWeatherForecastObject: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  forecastReducerStateAsAProp: state.forecastReducerState,
});

export default connect(mapStateToProps, { getUserClickedWeatherForecastObjectAction })(ForecastItem);