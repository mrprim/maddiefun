var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './js/index.js',
  output: {
    path: __dirname + '/bundle',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
}
