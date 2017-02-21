const extractValues = require('modules-values-extract');
const path = require('path');
const reactToolboxVariables = {};

const config = {
	plugins: [
		require('postcss-cssnext')({
			features: {
				customProperties: {
					variables: reactToolboxVariables,
				},
			},
		}),
		require('postcss-modules-values'),
	],
	sourceMap: true
};

module.exports = extractValues({files: [path.join(__dirname, 'client', 'theme', 'overrides.css')]}).then(
	variables => {
		Object.keys(variables).filter(key => key.match(/-/)).forEach(key => reactToolboxVariables[key] = variables[key]);
		return config;
	}
);