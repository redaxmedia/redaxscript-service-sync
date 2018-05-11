module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		copy: require('./tasks/copy')(grunt),
		ftpress: require('./tasks/ftpress')(grunt),
		shell: require('./tasks/shell')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'copy'
	]);
	grunt.registerTask('deploy',
	[
		'ftpress:deploy'
	]);
};
