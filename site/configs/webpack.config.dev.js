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
		docs: path.resolve(srcPath, "docs/index.js"),
		commons: path.resolve(srcPath, "commons/index.js")
	},
	resolve: {
		alias: {
			commons: path.resolve(srcPath, "commons"),
			assets: path.resolve(srcPath, "assets"),
			modules: path.resolve(srcPath, "modules")
		}
	},
	devServer: {
		port: 3000,
		publicPath: "/",
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
			test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|md)$/,
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
			'PUBLIC_URL': process.env.PUBLIC_URL || "docs"
		},
		filename: "docs/index.html"
	}),
	new DuplicatePackageCheckerPlugin(),
	],
	devtool: 'inline-source-map',
};