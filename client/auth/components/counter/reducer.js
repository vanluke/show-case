import {
  C_COUNTER_START,
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/components/counter/consts';

const initState = {
  counter: 0,
  text: '',
};

export default function counterReducer(state = initState, action = {}) {
  switch (action.type) {
    case C_COUNTER_START:
      return {
        ...state,
        type: C_COUNTER_START,
      };
    case C_COUNTER_STOP:
      return {
        ...initState,
        type: C_COUNTER_STOP,
      };
    case C_COUNTER_UPDATE:
      return {
        ...state,
        counter: state.counter + 1,
        type: C_COUNTER_UPDATE,
      };
    default:
      return state;
  }
}
