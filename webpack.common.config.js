const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/index.js'),
    ],
    vendor: ['react', 'react-dom', 'react-modal', 'react-router-dom', 'redux', 'react-redux']
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      '@': path.resolve('src'),
      '@components': path.resolve('src/components'),
      '@router': path.resolve('src/router'),
      '@redux': path.resolve('src/redux'),
      '@utils': path.resolve('src/utils'),
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      use: ['react-hot-loader/webpack', {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
          // 使用 babel-plugin-syntax-dynamic-import 时需要配置
          plugins: [
            'syntax-dynamic-import',
          ],
        },
      }, {
        loader: 'eslint-loader',
        options: {
          enforce: 'pre'
        }
      }]
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=10240'
    }]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Full Stack Study ReactJS',
      favicon: 'public/favicon.png'
    }),
  ],
};