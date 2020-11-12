import {  } from '../actions/types';

// Create the initial state of the forcastsReducer
const initialState = {
  // NOTE: Data type is: {}
  alert: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      console.log('Set Alert!');
      return {
        ...state,
        // payload: { alertText, alertType }
        alert: action.payload,
      };

    case REMOVE_ALERT:
      console.log('Remove Alert!');
      return {
        ...state,
        // payload: null
        alert: action.payload,
      };

    default:
      return state;
  }
};
