import Router from 'koa-router';

const routes = new Router();

routes.get('/hello', async function () {
  this.body = 'hello';
});

export default routes;
