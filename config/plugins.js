import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true,
    minify: { removeAttributeQuotes: true },
    filename: 'index.html',
    chunks: true,
  }),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '..'),
    verbose: true,
    dry: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true,
  }),
  new ExtractTextPlugin('bundle.css'),
];
