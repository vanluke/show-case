import Auth0Service from 'auth/service/auth0.service';
import { login } from 'auth/login/actions';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Login', () => {
  describe('actions', () => {
    it('should call loginToAuth0', () => {
      const auth = {
        loginToAuth0: sinon.spy(),
      };
      login(auth)();
       // eslint-disable-next-line no-unused-expressions
      expect(auth.loginToAuth0).to.have.been.called;
    });
  });
});
