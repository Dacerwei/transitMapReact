var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'inline-source-nap',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		moduleDirectories: ['node_modules','src'],
		extensions: ['','.js']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				// query: {
				// 	modules: true,
				// 	localIdentName: '[name]__[local]___[hash:base64:5]'
				// }
			},
			{
				test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
				loader: 'file',
			},
			{
				test: /\.json$/,
				loader: 'json',
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("styles.css")
	]
};