const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const dev = {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },
}

module.exports = merge(base, dev);
