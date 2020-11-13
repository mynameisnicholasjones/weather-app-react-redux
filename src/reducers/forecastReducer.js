import {
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
