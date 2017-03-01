const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.join(__dirname, 'client/app');
const BUILD_DIR = path.join(__dirname, 'dist');

const config = {
	devServer: {
		contentBase: './dist',
		hot: true,
		filename: 'bundle.dev.js',
		port: 9002,
		proxy: {
			"/api": "http://localhost:9001"
		},
		publicPath: '/'
	},
	entry: [
		APP_DIR + '/index.jsx'
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				exclude: /node_modules/,
				loader: 'eslint-loader',
				test: /\.jsx?$/
			},
			{
				test: /\.s?css$/,
				use: [
					{loader: "style-loader"},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							localIdentName: "[name]__[local]___[hash:base64:5]",
							modules: true,
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							includePaths: [
								path.join(__dirname, 'client', 'app'),
								path.join(__dirname, 'client', 'theme')
							],
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader"
					}
				],
			},
			{
				exclude: /node_modules/,
				include: APP_DIR,
				test: /\.jsx?$/,
				use: [
					{loader: "babel-loader"}
				]
			}
		]
	},
	output: {
		filename: 'bundle.dev.js',
		path: BUILD_DIR
	},
	plugins: [
		new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify('development')}}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({
			eslint: {
				failOnWarning: false,
				failOnError: true
			},
			options: {
				context: '/'
			}
		})
	],
	resolve: {
		extensions: ['.scss', '.css', '.js', '.jsx', '.json'],
		modules: ['node_modules']
	},
};

module.exports = config;
