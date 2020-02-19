const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const distPath = path.resolve(rootPath, "dist");
const publicPath = path.resolve(rootPath, "public");
const srcPath = path.resolve(rootPath, "src");

const siteConfig = {
    mode: "production",
    entry: {
        main: path.resolve(srcPath, "index.js"),
    },
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(distPath),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name(fileName) {
                        if (fileName.match(/\.(png|svg|jpg|jpeg|gif)$/)) {
                            return "images/[name].[hash].[ext]";
                        }
                        else if (fileName.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
                            return "fonts/[name].[hash].[ext]";
                        };
                        return '[path][name].[ext]';
                    },
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src', "index.html"),
            // inject: false,
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL || "/"
            }
        }),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: false
};
const docsConfig = {
    mode: "production",
    entry: {
        docs: path.resolve(srcPath, "docs/index.js")
    },
    resolve: {
        alias: {}
    },
    output: {
        path: path.resolve(distPath, "docs"),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name(fileName) {
                        if (fileName.match(/\.(png|svg|jpg|jpeg|gif)$/)) {
                            return "images/[name].[hash].[ext]";
                        }
                        else if (fileName.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
                            return "fonts/[name].[hash].[ext]";
                        };
                        return '[path][name].[ext]';
                    },
                },
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, 'src/docs', "index.html"),
            templateParameters: {
                'PUBLIC_URL': process.env.PUBLIC_URL || "/"
            }
        }),
        new CopyPlugin([
            {
                from: publicPath, to: distPath
            }
        ]),
        new DuplicatePackageCheckerPlugin(),
    ],
    devtool: false
};
module.exports = [siteConfig, docsConfig];