export const js = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel',
};

export const sass = {
  test: /\.scss/,
  loader: 'style-loader!css-loader!postcss-loader!sass-loader',
};

export const json = {
  test: /\.json?$/,
  exclude: /node_modules/,
  loader: 'json',
};

export const eslint = {
  test: /\.js?$/,
  loaders: ['eslint-loader'],
  include: `${__dirname}/src`,
  exclude: `${__dirname}/src/app/container`,
};

export default [js, json, sass];
