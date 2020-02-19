const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const publicPath = path.resolve(rootPath, "public");
const srcPath = path.resolve(rootPath, "src");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(srcPath, "index.js"),
        docs: path.resolve(srcPath, "docs", "index.js")
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
            template: path.resolve(srcPath, "docs", "index.html"),
            filename: "docs/index.html",
            excludeChunks: [ 'main' ],
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL || "/docs"
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(srcPath, "index.html"),
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL || "/"
            },
            excludeChunks: [ 'docs' ],
        }),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: 'inline-source-map',
};