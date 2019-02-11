module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: ['> 5%', 'last 2 versions'],
		}),
		require('pixrem')({
			atrules: true,
		}),
		require('cssnano'),
	],
};
