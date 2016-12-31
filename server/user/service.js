import superagent from 'superagent';
import config from '../config';

const { domain } = config.get('auth0');

export const getUserInfo = idToken => (new Promise((resolve, reject) => {
  superagent
  .get(`https://${domain}/userinfo`)
  .set('Authorization', `Bearer ${idToken}`)
  .end((err, response) => {
    if (err) {
      return reject(err);
    }
    return resolve(response.body);
  });
}));
