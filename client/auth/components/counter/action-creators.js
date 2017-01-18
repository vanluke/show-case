import {
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/components/counter/consts';

export const cCounterStop = () => ({
  type: C_COUNTER_STOP,
});

export const cCounterUpdate = counter => ({
  type: C_COUNTER_UPDATE,
  counter,
});

const createInterval = (dispatch, timeInterval) => setInterval(() => {
  dispatch(cCounterUpdate());
}, timeInterval);

export const cCounterStart = ({ actionAfter, timeInterval, time }) => (dispatch) => {
  const interval = createInterval(dispatch, timeInterval);
  setTimeout(() => {
    clearInterval(interval);
    actionAfter && actionAfter();
  }, timeInterval * time);
};
