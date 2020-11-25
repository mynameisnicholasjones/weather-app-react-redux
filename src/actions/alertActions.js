import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export const setAlertAction = (alertText, alertType) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { alertText, alertType },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: null,
      }),
    5000
  );
};