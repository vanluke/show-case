import {
  C_COUNTER_START,
  C_COUNTER_STOP,
  C_COUNTER_UPDATE,
} from 'auth/counter/consts';
import {
  cCounterStop,
  cCounterUpdate,
  cCounterStart,
  cCounterEpic,
} from 'auth/counter/epic';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';

describe('Auth', () => {
  const epicMiddleware = createEpicMiddleware(cCounterEpic);
  const mockStore = configureMockStore([epicMiddleware]);
  let store;

  beforeEach(() => {
    store = mockStore({
      counterReducer: {
      }
    });
  });

  afterEach(() => {
    epicMiddleware.replaceEpic(cCounterEpic);
  });
  describe('Counter', () => {
    describe('action creators', () => {
      describe('cCounterStart', () => {
        const counterProps = {
          counterFinished: () => {},
          time: 1,
          timeInterval: 1000,
        };
        it('should run counter', () => {
          store.dispatch(cCounterStart(counterProps));
          const actions = store.getActions();
          const expectedActions = [{
              type: C_COUNTER_START,
              payload: {
                counterFinished: () => {},
                time: 1,
                timeInterval: 1000,
              },
            },
          ];
          expect(store.getActions())
            .to
            .have
            .deep
            .property('[0].type', C_COUNTER_START);
        });
      });
      describe('cCounterStop', () => {
        it('should return C_COUNTER_STOP type', () => {
          const expectation = cCounterStop();
          expect(expectation)
            .to
            .have
            .property('type')
            .and
            .be
            .equal(C_COUNTER_STOP);
        });
      });
      describe('cCounterUpdate', () => {
        it('should return C_COUNTER_UPDATE type', () => {
          const expectation = cCounterUpdate();
          expect(expectation)
            .to
            .have
            .property('type')
            .and
            .be
            .equal(C_COUNTER_UPDATE);
        });
        it('should return counter value', () => {
          const counter = 12;
          const expectation = cCounterUpdate(counter);
          expect(expectation)
            .to
            .have
            .property('counter')
            .and
            .be
            .equal(counter);
        });
      });
    });
  });
});
