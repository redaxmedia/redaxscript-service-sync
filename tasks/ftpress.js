module.exports = () =>
{
	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'redaxscript-service',
			options:
			{
				url: process.env.FTP_URL,
				commandArray:
				[
					'mirror {SOURCE} {TARGET}-new-{TIMESTAMP} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'mv {TARGET} {TARGET}-old-{TIMESTAMP}',
					'mv {TARGET}-new-{TIMESTAMP} {TARGET}',
					'rm -rf {TARGET}-old-{TIMESTAMP}',
					'exit'
				],
				haltOnError: true
			}
		}
	};

	return config;
};
