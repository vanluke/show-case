import {
  C_COUNTER_START,
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/counter/consts';

export const initState = {
  counter: 0,
  text: '',
};

export default function counterReducer(state = initState, action = {}) {
  switch (action.type) {
    case C_COUNTER_START:
      return {
        ...state,
        counterFinished: action.payload.counterFinished,
        time: action.payload.time,
        counter: action.payload.time,
        timeInterval: action.payload.timeInterval,
      };
    case C_COUNTER_STOP:
      return {
        ...initState,
      };
    case C_COUNTER_UPDATE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
