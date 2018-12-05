const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const pro = {
  mode: "production",
}

module.exports = merge(base, pro);
