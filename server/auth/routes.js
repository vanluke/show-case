import { loginRoute, jwtConfig } from './token';

export default function (app) {
  app.use(loginRoute);
  app.use(jwtConfig);
}
