// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'                
        ],       
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // Extract css into a separate file
    new MiniCssExtractPlugin({      
      filename: '[name].css' ,
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: 'index.html',})   
  ],
});
