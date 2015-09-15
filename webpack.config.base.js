'use strict';

var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel?optional[]=runtime&stage=0'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          "autoprefixer?browsers=last 2 version"
        ]
      }
    ]
  },
  output: {
    library: 'react-flexboxgrid',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
