const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './lib',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
