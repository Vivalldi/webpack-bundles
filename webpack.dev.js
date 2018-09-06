const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = (env) => {
  const ignored = (env && env.watchDirs) ? env.watchDirs.replace(',', '|') : '!(*@())'; // re negate if nothing passed
  return merge(common, {
    entry: {
      common: [
        './common/src/index.js',
      ],
      bar: [
        './bar/src/index.js',
      ],
      foo: [
        './foo/src/index.js',
      ],
    },
    output: {
      publicPath: 'http://localhost:3333/',
      globalObject: 'this',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
      publicPath: '/',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      port: 3333,
      host: '0.0.0.0',
      hot: true,
      historyApiFallback: true,
      stats: { colors: true },
      open: false,
    },
    mode: 'development',
    watchOptions: {
      ignored: [`${__dirname}/!(*@(${ignored}))/**`, 'node_modules'],
    },
  });
}