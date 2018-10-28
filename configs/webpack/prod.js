// production config
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'                
      ],       
    }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({      
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
     // Hash the files using MD5
    new WebpackMd5Hash(),

     // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    
    new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
  ],
  optimization: {
    // Minify css
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
  
});
