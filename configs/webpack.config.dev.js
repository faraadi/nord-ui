const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/components/index.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        port: 3000
    }
};

module.exports = config;