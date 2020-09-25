module.exports = () =>
{
	const config =
	{
		distService:
		{
			src:
			[
				'images/**',
				'licenses/**',
				'modules/**',
				'news/**',
				'version/**',
				'xml/**'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript-service/',
			expand: true,
			dot: true
		}
	};

	return config;
};
