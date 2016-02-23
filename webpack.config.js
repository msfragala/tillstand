var webpack = require('webpack');
var versions = ['index', 'dist/tillstand'];
var configurations = [];
versions.forEach(function(version) {
  configurations.push({
    entry: ['./src/index.js'],
    output: {
      filename: `${version}.js`,
      library: 'umd'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
});
module.exports = configurations;
