module.exports = {
	plugins: [
		require('autoprefixer')(),
		require('pixrem')({
			atrules: true,
		}),
		require('cssnano')({
			discardDuplicates: false,
		}),
	],
};
