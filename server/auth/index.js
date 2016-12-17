import fs from 'fs';
import jwt from 'koa-jwt';
import parse from 'co-body';

const publicKey = fs.readFileSync('./server/auth/demo.rsa.pub');
const privateKey = fs.readFileSync('./server/auth/demo.rsa');

const loginRoute = function* (next) {
  if (this.url.match(/^\/login/)) {
    const claims = yield parse(this);
    const token = jwt.sign(claims, privateKey, {
      algorithm: 'RS256',
    });
    this.status = 200;
    this.body = { token };
  } else {
    yield next;
  }
};

export default function (app) {
  app.use(loginRoute);
  app.use(jwt({
    secret: publicKey,
    algorithm: 'RS256',
  }));
}
