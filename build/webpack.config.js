const path = require('path')
const webpackConfig = {
  entry: {
    'vue2-scrollspy': './src/index.js'
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist'),
    library: 'ScrollSpy',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}

if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
