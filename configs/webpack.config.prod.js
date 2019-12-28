const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");

const singleBundleConfig = {
    mode: "production",
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
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({
            canPrint: false
        })]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'nordic.min.css',
            ignoreOrder: false
        }),
        new FixStyleOnlyEntriesPlugin(),
    ]
};

const splittedBudlesConfig = {
    mode: "production",
    target: 'web',
    devtool: "none",
    entry: {
        button: path.resolve(srcPath, "components/button/button.css"),
        card: path.resolve(srcPath, "components/card/card.css"),
        grid: path.resolve(srcPath, "components/grid/grid.css"),
        tooltip: path.resolve(srcPath, "components/tooltip/tooltip.css"),
        colors: path.resolve(srcPath, "components/colors/colors.css"),
        base: [path.resolve(srcPath, "variables.css"), path.resolve(srcPath, "default.css")]
    },
    output: {
        path: path.resolve(distPath, "chunks")
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
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({ canPrint: false })],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            path: path.resolve(distPath) + "/chunks",
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new FixStyleOnlyEntriesPlugin()
    ]
};

module.exports = [singleBundleConfig, splittedBudlesConfig];