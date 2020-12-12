import {
  FORECAST_ERROR,
  GET_SHOW_FIVE_DAY_FORECAST_FLAG,
  GET_USER_CLICKED_WEATHER_FORECAST_OBJECT,
  GET_WEATHER_FORECAST,
  GET_WEATHER_FORECAST_LOCATION,
  SET_LOADING,
} from './types';

// Helper Functions
import { getAPICallValueForOpenWeatherMapDotOrg } from '../helpers/helperFunctions';

import { setAlertAction } from './alertActions';

export const getShowFiveDayForecastFlagAction = (showFiveDayForecastFlag) => {
  return {
    type: GET_SHOW_FIVE_DAY_FORECAST_FLAG,
    // Data type is: bool
    payload: showFiveDayForecastFlag,
  }
}

export const getUserClickedWeatherForecastObjectAction = (userClickedWeatherForecastObject) => {
  return {
    type: GET_USER_CLICKED_WEATHER_FORECAST_OBJECT,
    payload: userClickedWeatherForecastObject,
  }
};

// Get the weather forecast data for a given location
export const getWeatherForecastAction = (searchText) => async (dispatch) => {
  try {
    setLoadingAction();

    // Determine which API call to make
    let apiCallValue = getAPICallValueForOpenWeatherMapDotOrg(searchText);

    // Make the fetch Get request
    const res = await fetch(apiCallValue);

    // Format the res into the data
    const data = await res.json();

    // Handle the error if api did not find the city the user searched for.
    if (data.message === 'city not found') {

      dispatch(
        setAlertAction(`Unable to find location: "${searchText}". Please try again.`, 'danger')
      );
    } else {

      // Get the location of the weather. (i.e. The city and country name)
      dispatch({
        type: GET_WEATHER_FORECAST_LOCATION,
        payload: `${data.city.name}, ${data.city.country}`,
      });

      // Store 5 days of weather data in an array. This will be used to display either the current-day forecast or the five-day forecast to the user.
      let fiveDayWeatherForecastTemporaryArray = [];

      data.list.map((weatherObject, index) => {
        // Get the first five weather objects that's index is divisible by 8
        // IMPORTANT NOTE: The OpenWeatherMap.org API returns 40 items (i.e. index 0 through 39). This means that you will always get only five values that divide into 8 without any remainder (i.e. 0, 8, 16, 24, and 32).
        // So it does not matter which time of day the database is quieried, you will always get the desired five weather objects.
        if (index % 8 === 0) {
          fiveDayWeatherForecastTemporaryArray.push(weatherObject);
        }
      });

      dispatch({
        type: GET_WEATHER_FORECAST,
        payload: fiveDayWeatherForecastTemporaryArray,
      });
    }
  } catch (error) {
    console.log(error.response.statusText);

    dispatch({
      type: FORECAST_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set loading to 'true'
export const setLoadingAction = () => {
  return {
    type: SET_LOADING,
  };
};