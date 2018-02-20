const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/index.js'),
    ],
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
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
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=10240'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // 解决 vendor hash 变化问题，生产环境建议使用 webpack.HashedModuleIdsPlugin()
    // new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    // 'vendor' 必须在 'manifest' 之前引入
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Full Stack Study ReactJS',
      favicon: 'public/favicon.png'
    }),
    new CopyWebpackPlugin([{
      from: 'api',
      to: 'api'
    }]),
    new UglifyJSPlugin(),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    headers: { 'Access-Control-Allow-Origin': '*' }, // 配置 CORS 跨域访问
    historyApiFallback: true,
    hot: true,
  }
};