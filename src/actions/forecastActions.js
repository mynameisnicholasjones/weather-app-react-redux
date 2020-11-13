import {
  SET_LOADING,
} from './types';

// Set loading to 'true'
export const setLoadingAction = () => {
  return {
    type: SET_LOADING,
  };
};