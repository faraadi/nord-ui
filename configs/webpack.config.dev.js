const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");

const config = {
	mode: "development",
	target: 'web',
	devtool: "none",
	entry: {
		nord: path.resolve(srcPath, 'index.css'),
		"nord.rtl": path.resolve(srcPath, 'index.rtl.css')
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

module.exports = config;