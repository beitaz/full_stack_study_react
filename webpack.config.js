const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    // alias 貌似不能用
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
          plugins: [
            'syntax-dynamic-import',
            // 服务端渲染 Server-side rendering
            // ['import-inspector', {
            //   'serverSideRequirePath': true
            // }]
          ],
        },
      }, {
        loader: 'eslint-loader',
        options: {
          enforce: 'pre'
        }
      }]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=10240'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Full Stack Study ReactJS',
      favicon: 'public/favicon.png'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'api',
      to: 'api'
    }])
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    headers: { 'Access-Control-Allow-Origin': '*' }, // 配置 CORS 跨域访问
    historyApiFallback: true,
    hot: true,
    // open: 'Google Chrome', // 使用系统默认浏览器，或指定 `Google Chrome`,`Firefox`,`Safari`
  }
};