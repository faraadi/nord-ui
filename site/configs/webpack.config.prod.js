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

module.exports = {
	mode: "production",
	entry: {
		main: path.resolve(srcPath, "index.js"),
		docs: path.resolve(srcPath, "docs/index.js"),
		commons: path.resolve(srcPath, "commons/index.js")
	},
	resolve: {
		alias: {
			commons: path.resolve(srcPath, "commons"),
			assets: path.resolve(srcPath, "assets")
		}
	},
	output: {
		path: path.resolve(distPath),
		filename: chunkData => {
			switch (chunkData.chunk.name) {
				default:
				case "commons": 
				case "main": return '[name].[contenthash].js'
				case "docs": return 'docs/[name].[contenthash].js'
			}
		},
		chunkFilename: '[name].[id].[ext]'
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		},
		{
			test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|md)$/,
			loader: 'file-loader',
			options: {
				esModule: false,
				name(fileName) {
					if (fileName.match(/\.(png|svg|jpg|jpeg|gif)$/)) {
						return "images/[name].[hash].[ext]";
					}
					else if (fileName.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
						return "fonts/[name].[hash].[ext]";
					}
					else if(fileName.match(/\.(md)$/)) {
						return 'docs/[name].[ext]';
					}
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
			chunks: ["main", "commons"],
			templateParameters: {
				'PUBLIC_URL': process.env.PUBLIC_URL || "/"
			}
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(rootPath, 'src', "docs/index.html"),
			chunks: ["docs", "commons"],
			templateParameters: {
				'PUBLIC_URL': process.env.PUBLIC_URL || "/docs"
			},
			filename: "docs/index.html"
		}),
		new DuplicatePackageCheckerPlugin(),
		new CopyPlugin([
		    {
		        from: publicPath, to: distPath
		    }
		]),
	],
	devtool: false
}