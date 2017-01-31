import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import {
  C_COUNTER_START,
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/counter/consts';

export function cCounterStop() {
  return {
    type: C_COUNTER_STOP,
  };
}

export const cCounterUpdate = counter => ({
  type: C_COUNTER_UPDATE,
  counter,
});

export const cCounterStart = ({ counterFinished, time = 3, timeInterval = 1000 }) => ({
  type: C_COUNTER_START,
  payload: {
    counterFinished,
    time,
    timeInterval,
  },
});

export const cCounterEpic = (action$, store) =>
   action$.ofType(C_COUNTER_START)
    .mergeMap(() => {
      const { counterReducer } = store.getState();
      const obs = Observable.interval(counterReducer.timeInterval)
       .timeInterval()
       .map(count => ({ type: C_COUNTER_UPDATE, counter: count.value }))
       .take(counterReducer.time);

      obs.subscribe(() => {}, () => {}, () => counterReducer.counterFinished());
      return obs;
    });
