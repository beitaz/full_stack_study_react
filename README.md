# Full Stack Study React

完整系统地学习 ReactJS。

```shell
$ mkdir full_stack_study_react && cd full_stack_study_react
$ npm init
$ git init
$ echo '# Full Stack Study React' >> READEME.md
$ git add .
$ git commit -m "创建项目目录并添加 git repository 配置"
$ npm install webpack babel-core babel-loader babel-preset-env  babel-preset-react eslint eslint-loader eslint-plugin-react --save-dev
$ eslint --init
$ npm install react react-dom --save
$ npm install rimraf html-webpack-plugin --save-dev
$ npm install webpack-dev-server --save-dev
$ npm install redux react-redux redux-thunk --save
$ npm install copy-webpack-plugin --save-dev
$ npm install style-loader css-loader --save-dev # node-sass 在 windows 下需要先安装  Microsoft Windows SDK for Windows 7 and .NET Framework 4
$ npm install url-loader file-loader --save-dev
$ npm install bundle-loader --save-dev # 按需加载
$ npm install babel-eslint --save-dev # 使用 async/await 时报错 Parsing error: Unexpected token
$ npm install react-loadable --save # 使用 react-loadable + webpack 内建 syntax-dynamic-import 或 babel-plugin-syntax-dynamic-import 插件分割代码，实现按需加载。
$ npm install webpack-bundle-analyzer --save-dev # 编译分析（端口 8888 ）
```

**注意：** 在 `webpack.config.js` 中配置 `output: {chunkFilename: '[name].js'}` 可分拆编译后的文件。在 `import` 时使用 `/* webpackChunkName: 'NAME' */` 还可以指定编译后输出的文件名。