import autoprefixer from 'autoprefixer';
import precss from 'precss';
import loaders, { eslint } from './config/loaders';
import plugins from './config/plugins';

const entry = process.env.NODE_ENV === 'dev'
  ? ['webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.js']
  : ['./src/index.js'];

export default {
  devtool: 'inline-source-map',
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
  },

  devServer: {
    devServer: {
      contentBase: './public',
      quite: false,
      noInfo: false,
      stats: {
        colors: true,
        timings: true,
      },
      hot: true,
      historyApiFallback: true,
    },
  },
  plugins,
  module: {
    loaders,
    preLoaders: [eslint],
  },
  postcss() {
    return [precss, autoprefixer];
  },
};
