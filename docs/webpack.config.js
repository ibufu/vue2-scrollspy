/**
 * Created by lingchenxuan on 2016/12/7.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '/[name].js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        host: '0.0.0.0',
        compress: true,
        historyApiFallback: true,
        port: 3000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};