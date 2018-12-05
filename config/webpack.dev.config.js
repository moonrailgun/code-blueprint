const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const dev = {
  mode: "development",
}

module.exports = merge(base, dev);
