'use strict';

var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel'
        ],
        exclude: /(node_modules|test)/
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
  output: {
    library: 'react-flexboxgrid',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
