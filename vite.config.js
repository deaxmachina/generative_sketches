import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), glsl.default()],
	ssr: {
		noExternal: ['d3', 'd3-appendselect', 'hex-rgb'],
	},
	optimizeDeps: {
		exclude: [],
		include: [],
	},
};

export default config;
