import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import serve from 'koa-static';
import { app } from './app';
import config from '../config';
import error from '../error/configure';
import listen from './listen';
import secure from '../auth';
import routes from '../routes';
import './error-listener';

const version = config.get('version');

secure(app);

app.use(json());
app.use(cors());
app.use(serve('./public'));
app.use(mount(`/api/v${version}`, routes.middleware()));

error(app);

listen(app);
