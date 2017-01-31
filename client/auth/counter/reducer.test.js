import {
  C_COUNTER_START,
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/counter/consts';
import reducer, { initState } from 'auth/counter/reducer';
import { expect } from 'chai';

describe('Counter', () => {
  describe('reducer', () => {
    it('should return initial state', () => {
      const state = reducer();
      expect(state)
        .to
        .be
        .eql(initState);
    });
    it('should handle C_COUNTER_UPDATE', () => {
      const counter = 5;
      const text = 'text';
      const state = {
        counter,
        text,
      };
      const action = {
        type: C_COUNTER_UPDATE,
      };
      const reducedState = reducer(state, action);
      expect(reducedState)
        .to
        .be
        .eql({
          counter: counter - 1,
          text,
        });
    });
    it('should handle C_COUNTER_STOP', () => {
      const action = {
        type: C_COUNTER_STOP,
      };
      const state = reducer(undefined, action);
      expect(state)
        .to
        .be
        .eql(initState);
    });
    it('should handle C_COUNTER_START', () => {
      const time = 5;
      const timeInterval = 1000;
      const counterFinished = () => {};
      const action = {
        type: C_COUNTER_START,
        payload: {
          counterFinished,
          time,
          timeInterval,
        },
      };
      const state = reducer(undefined, action);
      expect(state)
        .to
        .be
        .eql({
          counter: 5,
          text: '',
          counterFinished,
          time,
          timeInterval,
        });
    });
  });
});
