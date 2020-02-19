const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const publicPath = path.resolve(rootPath, "public");
const srcPath = path.resolve(rootPath, "src");

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(srcPath, "index.js")
    },
    resolve: {
        alias: {}
    },
    devServer: {
        port: 3000,
        contentBase: publicPath,
        host: "0.0.0.0",
        clientLogLevel: "silent",
        historyApiFallback: true,
        watchContentBase: true,
        quiet: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(publicPath, "index.html"),
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL || "/"
            }
        }),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: 'inline-source-map',
};