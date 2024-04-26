const path = require('path');

module.exports = {
  entry: './src/Restaurant-Page.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};