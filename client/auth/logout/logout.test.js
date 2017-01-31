import React from 'react';
import { CounterContainer } from 'auth/counter';
import config from 'shared/config';
import Logout from 'auth/logout/logout';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const promiseExpectation = (fn, time) => (new Promise((resolve) => {
  setTimeout(() => {
    return resolve(fn());
  }, time);
}));

describe('Logout', () => {
  describe('components', () => {
    const mockStore = configureMockStore([thunk]);
    let store;
    beforeEach(() => {
      store = mockStore({
        counterReducer: {
          counter: 0,
          text: '',
        },
      });
    });
    it('should render', () => {
      const pushSpy = sinon.spy();
      const props = {
        router: {
          push: pushSpy,
        },
      };
      const wrapper = mount(<Provider store={store}>
        <Logout {...props} />
      </Provider>);
      expect(wrapper.length).to.equal(1);
    });
    it('should render CounterContainer', () => {
      const pushSpy = sinon.spy();
      const props = {
        router: {
          push: pushSpy,
        },
      };
      const wrapper = mount(<Provider store={store}>
        <Logout {...props} />
      </Provider>);
      expect(wrapper.length).to.equal(1);
      const container = wrapper.find(CounterContainer);
      expect(container.find(CounterContainer).length)
        .to
        .equal(1);
    });
  });
});
