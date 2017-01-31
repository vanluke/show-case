import Auth0Lock from 'auth0-lock';
import Auth0Service from 'auth/service/auth0.service';
import { expect } from 'chai';
import config from 'shared/config';
import localStorage from 'shared/test-utils/localStorage';
import rewire from 'rewire';
import sinon from 'sinon';
import { browserHistory } from 'react-router';

describe('Auth', () => {
  describe('service', () => {
    describe('Auth0Service', () => {
      const ls = localStorage();
      beforeEach(() => {
        ls.setLocalStorage();
      });
      it('should initialize', () => {
        const lock = {
          on: () => {},
        };
        const instance = new Auth0Service(lock);
        // eslint-disable-next-line no-unused-expressions
        expect(instance).to.be.defined;
      });
      it('should setToken set value in localStorage', () => {
        const token = 'I am token';
        Auth0Service.setToken(token);
        expect(global.localStorage.getItem(config.auth.tokenKey))
          .to
          .be
          .equal(token);
      });
      it('should setAccessToken set value in localStorage', () => {
        const token = 'I am token';
        Auth0Service.setAccessToken(token);
        expect(global.localStorage.getItem(config.auth.accessTokenKey))
          .to
          .be
          .equal(token);
      });
      it('should setSub set value in localStorage', () => {
        const sub = 'I am sub';
        Auth0Service.setSub(sub);
        expect(global.localStorage.getItem(config.auth.sub))
          .to
          .be
          .equal(sub);
      });
      it('should loggedIn pass', () => {
        const isLogged = Auth0Service.loggedIn();
        // eslint-disable-next-line no-unused-expressions
        expect(isLogged).to.be.true;
      });
      it('should getSub get sub from token', () => {
        const decoded = Auth0Service.getSub();
        expect(decoded).to.have.property('sub');
      });
      it('should getAccessToken get access token', () => {
        const token = Auth0Service.getAccessToken();
        // eslint-disable-next-line no-unused-expressions
        expect(token).to.be.defined;
      });
      it('should getToken get token', () => {
        const token = Auth0Service.getToken();
        // eslint-disable-next-line no-unused-expressions
        expect(token).to.be.defined;
      });
      it('should logout removes tokens', () => {
        Auth0Service.logout();
        const accessToken = Auth0Service.getAccessToken();
        const token = Auth0Service.getToken();
        // eslint-disable-next-line no-unused-expressions
        expect(token).to.be.udefined;
        // eslint-disable-next-line no-unused-expressions
        expect(accessToken).to.be.udefined;
      });
      it('should loginToAuth0 call lock show method', () => {
        const lock = {
          show: sinon.spy(),
          on: () => {},
        };
        const auth0 = new Auth0Service(lock);
        auth0.loginToAuth0();
        // eslint-disable-next-line no-unused-expressions
        expect(lock.show).to.be.calledOnce;
      });
      it('should onAuthenticated call auth service onAuthenticated', async() => {
        const authService = {
          onAuthenticated: sinon.spy(),
        };
        const lock = {
          show: sinon.spy(),
          on: () => {},
        };
        const authResult = {
          idTokenPayload: {},
        };
        const stub = sinon.stub(browserHistory, 'push', () => 'mock');
        const auth0 = new Auth0Service(lock, authService);
        await auth0.onAuthenticated(authResult);
        // eslint-disable-next-line no-unused-expressions
        expect(authService.onAuthenticated).to.be.calledOnce;
        stub.restore();
      });
    });
  });
});
