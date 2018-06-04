var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/client/app.js'],
  },
  output: {
    //path: path.resolve(__dirname, 'public'),
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'public/[name].js'
  },

  //plugins: [
  //  new webpack.DefinePlugin({
  //    'process.env.NODE_ENV': JSON.stringify('dev')
  //  })
  //],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /client/,
        //exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.md$/,
        include: /page/,
        //exclude: /node_modules/,
        use: 'markdown_loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ]

  }

};
