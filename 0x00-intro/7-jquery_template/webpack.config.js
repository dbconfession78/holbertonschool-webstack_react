const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry:  './src/index.js',
	output: {
		filename: "index.bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Holberton School webpack',
			template: './src/index.html',
			file: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
}
