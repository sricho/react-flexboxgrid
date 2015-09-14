module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "react-flexboxgrid.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: [
          "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  }
};
