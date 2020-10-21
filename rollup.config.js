import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		builtins(),
		json(),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs({
      ignore: id => id.startsWith('_webpack_ignored_')
    }),
		production && terser() // minify, but only in production
	]
};
