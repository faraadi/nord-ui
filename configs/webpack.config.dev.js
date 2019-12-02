const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootPath = path.resolve(__dirname, "../");
const srcPath = path.resolve(rootPath, "src");
const distPath = path.resolve(rootPath, "dist");
const demoPath = path.resolve(rootPath, "demo");

const config = {
    entry: './src/components/index.css',
    output: {
        path: distPath,
        filename: 'bundle.css'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: [demoPath, srcPath],
        compress: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(demoPath, "index.html")
        })
    ]
};

module.exports = config;