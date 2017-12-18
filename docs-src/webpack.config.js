const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
}
