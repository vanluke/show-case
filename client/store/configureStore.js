// import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'reducers';
import rootEpic from 'epics';

const loggerMiddleware = logger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware, loggerMiddleware)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
