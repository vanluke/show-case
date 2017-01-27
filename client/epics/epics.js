import { combineEpics } from 'redux-observable';
import { cCounterEpic } from 'auth/components/counter/epic';

export default combineEpics(cCounterEpic);
