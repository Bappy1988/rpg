const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const APP_DIR = path.join(__dirname, 'client/app');
const BUILD_DIR = path.join(__dirname, 'dist');

const config = {
	entry: {
		app: APP_DIR + '/index.jsx',
		vendor: [
			"react", "react-addons-css-transition-group", "react-dom", "react-redux", "react-router", "react-router-redux",
			"react-toolbox", "redux", "redux-thunk", "reselect"
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
		filename: '[name].prod.js',
		path: BUILD_DIR
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		}),
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
		new ExtractTextPlugin({
			filename: "[name].prod.css"
		}),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
				discardComments: {removeAll: true}
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false, unused: true, dead_code: true},
			output: {comments: false}
		})
	],
	resolve: {
		alias: {
			actions: path.resolve(__dirname, 'client', 'app', 'actions'),
			components: path.resolve(__dirname, 'client', 'app', 'components'),
			reducers: path.resolve(__dirname, 'client', 'app', 'reducers'),
			selectors: path.resolve(__dirname, 'client', 'app', 'selectors')
		},
		extensions: ['.scss', '.css', '.js', '.jsx', '.json'],
		modules: ['node_modules']
	}
};

module.exports = config;
