import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialGlobalState = {};

const middlewareArray = [thunk];

const store = createStore(
  rootReducer,
  initialGlobalState,
  composeWithDevTools(applyMiddleware(...middlewareArray))
);

export default store;