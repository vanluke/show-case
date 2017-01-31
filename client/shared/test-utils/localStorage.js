import jwt from 'jsonwebtoken';
import config from 'shared/config';

export const secret = 'shhhhh';

export const createToken = () => jwt.sign({ sub: 'user-name', foo: 'bar', exp: Math.floor(Date.now() / 1000) + 3000 }, secret);

export const verifyToken = (token, key, fn) => jwt.verify(token, key, fn);

export default function init() {
  return {
    setLocalStorage: () => {
      const container = {};
      global.localStorage = {
        container: {},
        getItem: key => container[key],
        setItem: (key, value) => {
          container[key] = value;
        },
        removeItem: key => delete container[key],
      };
      const token = createToken();

      localStorage.setItem(config.auth.tokenKey, token);
      localStorage.setItem(config.auth.accessTokenKey, token);
      localStorage.setItem(config.auth.appToken, token);
    },
  };
}
