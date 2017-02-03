const webpack = require('webpack');
// var path = require('path');

module.exports = {
  entry: {
    index: './app/index.js'
  },

  output: {
    path: './bin',
    publicPath: '/assets/',
    filename: 'flashcard.bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' }
    ]
  },

  // this option enables the hot module replacement where a watch is set
  // on the source and any changes will trigger recompilation
  devServer: {
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // })
  ]
};
