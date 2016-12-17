import config from '../config.js';

const port = config.get('port');
const host = config.get('host');
const version = config.get('version');

export default function (app) {
  app.listen(port, host, () => {
    console.log(`listening on ${host}:${port}/api/v${version}`);
  });
}
