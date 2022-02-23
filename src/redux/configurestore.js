/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerMessage from './Greetings/greetings';

const reducer = combineReducers({
  reducerMessage,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
