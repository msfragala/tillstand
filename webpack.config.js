var webpack = require('webpack');
var path = require('path');

module.exports = [
  {
    entry: path.resolve('./index.js'),
    output: {
      path: path.resolve('./dist'),
      filename: 'tillstand.js',
      library: 'tillstand',
      libraryTarget: 'umd',
    }
  },
  {
    entry: path.resolve('./index.js'),
    output: {
      path: path.resolve('./dist'),
      filename: 'tillstand.min.js',
      library: 'tillstand',
      libraryTarget: 'umd',
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
];
