import fs from 'fs';
import jwt from 'koa-jwt';
import parse from 'co-body';

const privateKey = fs.readFileSync('./server/auth/demo.rsa');
const publicKey = fs.readFileSync('./server/auth/demo.rsa.pub');

const createToken = (userId, privKey) => jwt.sign(userId, privKey, {
  algorithm: 'RS256',
});

export function* loginRoute(next) {
  if (!this.url.match(/^\/login/)) {
    return yield next;
  }
  const req = JSON.parse(yield parse(this));
  if (!req.token) {
    return this.throw(401, 'Unauthorize');
  }
  const token = createToken(req.userId, privateKey);
  this.status = 200;
  this.body = { token };
}

export const jwtConfig = jwt({
  secret: publicKey,
  algorithm: 'RS256',
  passthrough: false,
});
