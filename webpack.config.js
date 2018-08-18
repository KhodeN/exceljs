const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        overlay: true,
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Excel.js'}),
        new webpack.HotModuleReplacementPlugin(),
    ],
};