const errorHandler = function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
};


export default function (app) {
  app.use(errorHandler);
}
