import { combineEpics } from 'redux-observable';
import { cCounterEpic } from 'auth/counter/epic';

export default combineEpics(cCounterEpic);
