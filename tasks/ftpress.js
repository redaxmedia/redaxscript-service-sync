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
				command:
				[
					'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'exit'
				]
			}
		}
	};

	return config;
};
