import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Auth0Service from 'auth/service/auth0.service';
import Login from 'auth/login';
import localStorage from 'shared/test-utils/localStorage';
import { login } from 'auth/login/actions';
import sinon from 'sinon';

describe('Login', () => {
  describe('components', () => {
    beforeEach(() => {
      const ls = localStorage();
      ls.setLocalStorage();
    });
    it('should render', () => {
      const Auth0ServiceStub = sinon.spy(() => sinon.createStubInstance(Auth0Service));
      const auth = new Auth0ServiceStub();
      const props = {
        auth,
      };
      const wrapper = mount(<Login {...props} />);
      expect(wrapper.length).to.equal(1);
    });
  });
  it('should handle login button', () => {
    const Auth0ServiceStub = sinon.spy(() => sinon.createStubInstance(Auth0Service));
    const auth = new Auth0ServiceStub();
    const props = {
      auth,
    };
    const wrapper = shallow(<Login {...props} />);
    const buttonLogin = wrapper.find('.c-login__button--primary');

    buttonLogin.first().simulate('click');
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.instance().props.auth.loginToAuth0)
      .to
      .be
      .calledOnce;
  });
});
