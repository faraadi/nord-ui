const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");

const config = {
    mode: "development",
    target: 'web',
    devtool: "none",
    entry: {
        main: path.resolve(srcPath, 'index.css')
    },
    output: {
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: srcPath,
                            hmr: false,
                        },
                    },
                    'css-loader',
                ],

            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'nordic.min.css',
            ignoreOrder: false
        }),
        new FixStyleOnlyEntriesPlugin(),
    ]
};

module.exports = config;