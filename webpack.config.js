const path = require('path');

module.exports = {
  entry: './lib',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
};
