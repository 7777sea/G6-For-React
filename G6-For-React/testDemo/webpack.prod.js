const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//webpack4中使用MiniCssExtractPlugin来代替ExtractTextPlugin
const common = require('./webpack.common.js');

module.exports = merge(common.baseConfig, {
    mode:'production',
    devtool: 'null',
    module: {
        rules: [common.cssRules]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            allChunks: true
        })
    ]
});