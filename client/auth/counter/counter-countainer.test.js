import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import CounterContainer from 'auth/counter/counter-container';
import Counter from 'auth/counter/counter';

describe('Counter', () => {
  describe('components', () => {
    const mockStore = configureMockStore([thunk]);
    let store;
    describe('Counter', () => {
      beforeEach(() => {
        store = mockStore({
          counterReducer: {
            counter: 0,
            text: '',
          },
        });
      });
      it('should render', () => {
        const text = 'Counter text';
        const time = 1;
        const timeInterval = 1000;
        const actionAfter = () => {};
        const wrapper = mount(
          <Provider store={store}>
            <CounterContainer
              text={text}
              time={time}
              timeInterval={timeInterval}
              actionAfter={actionAfter}
            />
          </Provider>
        );
        expect(wrapper.find(CounterContainer).length).to.equal(1);
        const container = wrapper.find(CounterContainer);
        expect(container.find(Counter).length)
          .to
          .equal(1);
        expect(container.find(Counter).props())
          .to
          .eql({
            counter: 0,
            text,
            suffix: '',
          });
      });
    });
  });
});
