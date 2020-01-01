const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");
const demoPath = path.resolve(rootPath, "demo");

const config = {
    entry: path.resolve(srcPath, 'index.css'),
    output: {
        path: distPath,
        // filename: 'bundle.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ]
    },
    devServer: {
        contentBase: demoPath,
        publicPath: "/",
        hot: true,
        port: 3000,
        host: "0.0.0.0",
        clientLogLevel: "silent",
        historyApiFallback: true,
        watchContentBase: true,
        quiet: true,
        overlay: {
            warnings: true,
            errors: true
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(demoPath, "index.html")
        })
    ]
};

module.exports = config;