const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

module.exports = {
  context: config.paths.webpackRoot,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([config.paths.dist], {
      allowExternal: true,
    }),
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'foo.html',
      chunks: ['foo', 'common'],
      title: 'Foo',
      template: './templates/react.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'bar.html',
      chunks: ['bar', 'common'],
      title: 'Bar',
      template: './templates/react.html',
    }),
  ],
  resolve: {
    alias: {
      bar: config.paths.bar,
      foo: config.paths.foo,
      common: config.paths.common,
    },
    extensions: ['.js', '.jsx'],
  }
}