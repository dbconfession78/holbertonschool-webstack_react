const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			path: path.resolve(__dirname, 'dist')
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		host: "0.0.0.0",
		port: 5000,
		contentBase: './dist',
		hot: true
	},
};

