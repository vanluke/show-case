import superagent from 'superagent';
import Auth0Service, { AuthService } from 'auth/service';

export class UserService {
  getUserDetails () {
    const accessToken = Auth0Service.getAccessToken();
    const token = AuthService.getToken();
    return superagent
    .get(`http://localhost:1337/api/v0/user/${accessToken}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Access-Control-Allow-Origin', '*');
  }
}
