export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/generations/__layout.svelte"),
	() => import("../../src/routes/sketches/__layout.svelte"),
	() => import("../../src/routes/generations/[slug]/index.svelte"),
	() => import("../../src/routes/generations/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/sketches/[slug]/index.svelte"),
	() => import("../../src/routes/sketches/index.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"generations": [[0, 2, 5], [1]],
	"sketches": [[0, 3, 8], [1]],
	"generations/[slug]": [[0, 2, 4], [1]],
	"sketches/[slug]": [[0, 3, 7], [1]]
};