import fs from 'fs';
import jwt from 'koa-jwt';
import parse from 'co-body';

const privateKey = fs.readFileSync('./server/auth/demo.rsa');
const publicKey = fs.readFileSync('./server/auth/demo.rsa.pub');

export function* loginRoute(next) {
  if (!this.url.match(/^\/login/)) {
    return yield next;
  }
  const claims = yield parse(this);
  const token = jwt.sign(claims, privateKey, {
    algorithm: 'RS256',
  });
  this.status = 200;
  this.body = { token };
}

export const jwtConfig = jwt({
  secret: publicKey,
  algorithm: 'RS256',
  passthrough: false,
});
