// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const open = require('open');
const commonConfig = require('./common');

const url = 'http://localhost:8080';
module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${open(url)}`,
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  devServer: {
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: 'index.html',})   
  ],
});
