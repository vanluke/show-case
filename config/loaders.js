const makeFileLoader = function(args) {
  switch (args) {
    case 'woff':
      return {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      };
    case 'ttf':
      return {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      };
    case 'svg':
      return {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      };
    case 'eot':
      return {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      };
    case 'jpg':
      return {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'],
      };
    default:
      return {};
  }
};

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

export const svgLoader = makeFileLoader('svg');
export const eotLoader = makeFileLoader('eot');
export const woffLoader = makeFileLoader('woff');
export const ttfLoader = makeFileLoader('ttf');
export const jpgLoader = makeFileLoader('jpg');

export default [js, json, sass,
  svgLoader, eotLoader, woffLoader,
  ttfLoader, jpgLoader];
