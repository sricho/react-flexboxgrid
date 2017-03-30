var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/browser.js',
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['dots'],
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            loaders: [
              "style",
              "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
              "postcss"
            ]
          }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-babel-preprocessor',
      'karma-mocha-reporter'
    ]
  });
};
