// NOTE: index.js is the Root Reducer
import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import forecastReducer from './forecastReducer';

// NOTE: combineReducers takes in an object that contains all of your reducers
export default combineReducers({
  // [The name for the reducer's state]: [The name of the corresponding reducer]
  alertReducerState: alertReducer,
  forecastReducerState: forecastReducer,
});