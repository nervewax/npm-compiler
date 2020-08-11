//Ref: https://dev.to/proticm/how-to-setup-rollup-config-45mk
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: './src/js/main.js',
	output: {
		file: './public/assets/js/main.min.js',
		format: 'iife',
		name: 'bundle',
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
		resolve(),
		commonjs(),
		uglify(),
	],
};
