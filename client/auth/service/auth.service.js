import config from 'shared/config';
import superagent from 'superagent';
import { isTokenExpired } from 'auth/service/auth.utils';

export default class AuthService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  static getToken() {
    return localStorage.getItem(config.auth.appToken);
  }

  static isTokenValid() {
    const token = AuthService.getToken();
    return !!token && !isTokenExpired(token);
  }

  static setToken(token) {
    localStorage.setItem(config.auth.appToken, token);
  }

  static logout() {
    localStorage.removeItem(config.auth.appToken);
  }

  authenticate(userId, token) {
    const url = `${this.baseUrl}/${config.auth.routes.login}`;
    return new Promise((resolve, reject) => {
      superagent
      .post(url,
        JSON.stringify({ userId, token }))
      .set('Content-Type', 'text/plain')
      .end((error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response.body);
      });
    });
  }

  async onAuthenticated(userId, auth0token) {
    const { token, userInfo } = await this.authenticate(userId, auth0token);
    AuthService.setToken(token);
    return userInfo;
  }
}
