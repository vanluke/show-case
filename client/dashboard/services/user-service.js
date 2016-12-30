import superagent from 'superagent';
import { AuthService } from 'auth/service';

export class UserService {
  getUserDetails() {
    const token = AuthService.getToken();
    return superagent
    .get('http://localhost:1337/api/v0/user/me')
    .set('Authorization', `Bearer ${token}`)
    .set('Access-Control-Allow-Origin', '*');
  }
}
