var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'web/static')
var APP_DIR = path.resolve(__dirname, 'web/app')

var config = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
