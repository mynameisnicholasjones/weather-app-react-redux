import {
  FORECAST_ERROR,
  GET_WEATHER_FORECAST,
  GET_WEATHER_FORECAST_LOCATION,
  SET_LOADING,
} from '../actions/types';

// Create the initial state of the forecastReducer
const initialState = {
  loading: false,
  error: null,
  // NOTE: Default value is 'true' because the five-day forecast should show by default
  fiveDayForecastFlag: true,
  // Data type is: []
  fiveDayWeatherForecastArray: null,
  // Data type is: {}
  weatherForecastLocation: null,
  // Data type is: {}
  userClickedWeatherForecastObject: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORECAST_ERROR:
      console.error(action.payload);
      return {
        ...state,
        // payload: error.response.statusText
        error: action.payload,
        loading: false,
      };

    case GET_WEATHER_FORECAST:
      return {
        ...state,
        // payload: fiveDayWeatherForcastArray,
        fiveDayWeatherForecastArray: action.payload,
        loading: false,
      }

    case GET_WEATHER_FORECAST_LOCATION:
      return {
        ...state,
        // payload: 'City, Country'
        weatherForcastLocation: action.payload,
        loading: false,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
