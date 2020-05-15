const packagePath = require( './package-path' );
const packageName = require( packagePath( './package' ) ).name;
const pluginName = ( packageName || '' ).replace( 'eslint-plugin-', '' );

module.exports = {
	pluginName: pluginName,
	fixCodeExamples: true,
	showConfigComments: false,
	templatePath: null,
	docPath: null,
	rulePath: null,
	testPath: null,
	docLink: false,
	ruleLink: true,
	testLink: true
};