import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'reducers';

const loggerMiddleware = logger();

export default function configureStore() {
  return applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )(createStore)(rootReducer);
}
