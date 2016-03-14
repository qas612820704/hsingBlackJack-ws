var webpack = require("webpack");
module.exports = {
  entry: {
    vendor: [
      // 'socket.io/socket.io.js',
      'angular/angular.min.js',
      'angular-animate/angular-animate.min.js',
      'angular-aria/angular-aria.min.js',
      'angular-messages/angular-messages.min.js',
      'angular-material/angular-material.min.js',
      'angular-ui-router/release/angular-ui-router.min.js',
      'angular-socket-io/socket.min.js',
      'angular-toastr/dist/angular-toastr.min.js',
    ],
    // app: __dirname + '/public/src/app.js',
  },
  output: {
    path: __dirname + '/public/javascripts/dist/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
