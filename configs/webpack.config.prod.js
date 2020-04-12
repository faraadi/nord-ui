const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const resolveSplittedEntries = require('./splitted-entries.js');
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");
const componentsPath = path.resolve(srcPath, "components");

const singleBundleConfig = {
    mode: "production",
    target: 'web',
    devtool: "none",
    entry: {
        nord: path.resolve(srcPath, 'index.css'),
        'nord.rtl': path.resolve(srcPath, 'index.rtl.css')
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
            filename: '[name].min.css',
            ignoreOrder: false
        }),
		new FixStyleOnlyEntriesPlugin(),
		new StylelintPlugin({
			configFile: path.resolve(rootPath, ".stylelintrc"),
			files: "src/*"
		})
    ]
};

const splittedBudlesConfig = {
    mode: "production",
    target: 'web',
    devtool: "none",
    entry: resolveSplittedEntries(componentsPath),
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
		new FixStyleOnlyEntriesPlugin(),
		new StylelintPlugin({
			configFile: path.resolve(rootPath, ".stylelintrc"),
			files: "src/*"
		})
    ]
};

module.exports = [singleBundleConfig, splittedBudlesConfig];