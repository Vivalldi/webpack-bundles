const path = require('path');

const webpackRoot = __dirname;

const dist = path.join(webpackRoot, 'dist');

const bar = path.join(webpackRoot, 'bar');
const foo = path.join(webpackRoot, 'foo');
const common = path.join(webpackRoot, 'common');

const paths = {
  webpackRoot: webpackRoot,
  dist: dist,
  bar: bar,
  foo: foo,
  common: common,
};

console.log(paths);

module.exports = {
  paths: paths,
};
