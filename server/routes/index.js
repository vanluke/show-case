import Router from 'koa-router';
import { getUserDetails } from '../user';

const routes = new Router();

routes.get('/hello', async function () {
  this.body = { name: 'hello' };
});

routes.get('/user/:login', getUserDetails);

export default routes;
