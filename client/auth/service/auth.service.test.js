import config from 'shared/config';
import superagent from 'superagent';
import { isTokenExpired } from 'auth/service/auth.utils';
import AuthService from 'auth/service/auth.service';
import localStorage, { createToken, secret, verifyToken } from 'shared/test-utils/localStorage';
import { expect } from 'chai';
import nock from 'nock';

describe('Auth', () => {
  describe('services', () => {
    const ls = localStorage();
    beforeEach(() => {
      ls.setLocalStorage();
    });
    it('initialize', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(new AuthService('http://localhost')).to.be.defined;
    });
    it('should set token', () => {
      const myToken = 'token';
      AuthService.setToken(myToken);
      expect(global.localStorage.getItem(config.auth.appToken))
        .to
        .be
        .equal(myToken);
    });
    it('should get token', () => {
      const myToken = 'token';
      AuthService.setToken(myToken);
      expect(AuthService.getToken())
        .to
        .be
        .equal(myToken);
    });
    it('should validate token', () => {
      expect(AuthService.isTokenValid())
        .to
        .be
        .equal(true);
    });
    it('should logout remove token', () => {
      AuthService.logout();
      // eslint-disable-next-line no-unused-expressions
      expect(AuthService.getToken())
        .to
        .be
        .undefined;
    });
    it('should authenticate fetch app token', async() => {
      const baseUrl = 'http://localhost:xxxx';
      const instance = new AuthService(baseUrl);
      const userId = 12;
      const token = 'token';
      nock(baseUrl)
        .post(`/${config.auth.routes.login}`,
          JSON.stringify({ userId, token }))
        .reply(201, { body: createToken() });
      const { body } = await instance.authenticate(userId, token);
      verifyToken(body, secret, (err) => {
        // eslint-disable-next-line no-unused-expressions
        expect(err).to.be.undefined;
      });
      nock.cleanAll();
    });
    it('should onAuthenticated set token', async() => {
      const baseUrl = 'http://localhost:xxxx';
      const instance = new AuthService(baseUrl);
      const userId = 12;
      const token = 'token';
      nock(baseUrl)
        .post(`/${config.auth.routes.login}`,
          JSON.stringify({ userId, token }))
        .reply(201, {
          token: createToken(),
          userInfo: {
            name: 'name',
          },
        });
      await instance.onAuthenticated(userId, token);
      // eslint-disable-next-line no-unused-expressions
      expect(AuthService.getToken()).to.be.defined;
      nock.cleanAll();
    });
  });
});
