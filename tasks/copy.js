module.exports = () =>
{
	const config =
	{
		distService:
		{
			src:
			[
				'images/**',
				'version/**',
				'.htaccess',
				'pad.xml'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript-service/',
			expand: true,
			dot: true
		}
	};

	return config;
};
