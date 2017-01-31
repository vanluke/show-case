import jwtDecode from 'jwt-decode';
import { browserHistory } from 'react-router';
import config from 'shared/config';
import { isTokenExpired } from 'auth/service/auth.utils';

export default class Auth0Service {
  constructor(lock, authService) {
    this.lock = lock;
    this.authService = authService;
    this.lock.on('authenticated', this.onAuthenticated.bind(this));
    this.loginToAuth0 = this.loginToAuth0.bind(this);
  }

  async onAuthenticated(authResult) {
    Auth0Service.setToken(authResult.idToken);
    Auth0Service.setAccessToken(authResult.accessToken);
    await this.authService.onAuthenticated(authResult.idTokenPayload.sub,
       authResult.accessToken);
    browserHistory.push(config.routes.home);
  }

  loginToAuth0() {
    this.lock.show();
  }

  static logout() {
    localStorage.removeItem(config.auth.tokenKey);
    localStorage.removeItem(config.auth.accessTokenKey);
  }

  static getToken() {
    return localStorage.getItem(config.auth.tokenKey);
  }

  static getAccessToken() {
    return localStorage.getItem(config.auth.accessTokenKey);
  }

  static getSub() {
    return jwtDecode(Auth0Service.getToken());
  }

  static loggedIn() {
    const token = Auth0Service.getToken();
    return !!token && !isTokenExpired(token);
  }

  static setSub(sub) {
    localStorage.setItem(config.auth.sub, sub);
  }

  static setToken(token) {
    localStorage.setItem(config.auth.tokenKey, token);
  }

  static setAccessToken(accessToken) {
    localStorage.setItem(config.auth.accessTokenKey, accessToken);
  }
}
