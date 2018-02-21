const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {
  //
  // React Hot Loader: It appears that "react-hot-loader/patch" did not run immediately 
  // before the app started. Make sure that it runs before any other code. 
  // For example, if you use Webpack, you can add "react-hot-loader/patch" as the very 
  // first item to the "entry" array in its config. Alternatively, you can add 
  // require("react-hot-loader/patch") as the very first line in the application code, 
  // before any other imports.
  //
  // entry: {
  //   app: [
  //     'react-hot-loader/patch',
  //   ],
  // },
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
    // openPage: ''
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    // 解决 vendor hash 变化问题，生产环境建议使用 webpack.HashedModuleIdsPlugin()
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'api',
      to: 'api'
    }]),
    // new BundleAnalyzerPlugin(), // 编译分析工具
  ],
};

module.exports = merge(commonConfig, devConfig);