const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.join(__dirname, 'client/app');
const BUILD_DIR = path.join(__dirname, 'dist');

const config = {
	entry: {
		app: APP_DIR + '/index.jsx',
		vendor: [
			"react", "react-addons-css-transition-group", "react-dom", "react-redux", "react-router", "react-router-redux",
			"react-toolbox", "redux", "redux-thunk", "reselect", path.join(__dirname, 'client', 'theme', 'theme')
		]
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				exclude: /node_modules/,
				loader: 'eslint-loader',
				test: /\.jsx?$/
			},
			{
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								localIdentName: "[name]__[local]___[hash:base64:5]",
								modules: true,
								sourceMap: false
							}
						},
						{
							loader: "sass-loader",
							options: {
								includePaths: [
									path.join(__dirname, 'client', 'app'),
									path.join(__dirname, 'client', 'theme')
								],
								sourceMap: false
							}
						},
						{
							loader: "postcss-loader"
						}
					]
				}),
				test: /\.s?css$/,
			},
			{
				exclude: /node_modules/,
				include: APP_DIR,
				loader: "babel-loader",
				test: /\.jsx?$/,
			}
		]
	},
	output: {
		filename: 'bundle.prod.js',
		path: BUILD_DIR
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.prod.js"}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify('production')}}),
		new webpack.LoaderOptionsPlugin({
			eslint: {
				failOnWarning: false,
				failOnError: true
			},
			options: {
				context: '/'
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false, unused: true, dead_code: true },
			output: { comments: false }
		}),
		new ExtractTextPlugin({
			filename: "bundle.prod.css",
			allChunks: true
		})
	],
	resolve: {
		extensions: ['.scss', '.css', '.js', '.jsx', '.json'],
		modules: ['node_modules']
	}
};

module.exports = config;
