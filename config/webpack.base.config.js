const path = require('path');
const package = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: package.name,
      template: path.resolve(__dirname, './index.html')
    })
  ]
}
