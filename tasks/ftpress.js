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
			dest: 'www/htdocs/w00976cb/redaxscript-service',
			options:
			{
				url: process.env.FTP_URL,
				command:
				[
					'set sftp:auto-confirm yes',
					'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'exit'
				]
			}
		}
	};

	return config;
};
