export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/sketches/__layout.svelte"),
	() => import("../../src/routes/generations/amazarashi.svelte"),
	() => import("../../src/routes/generations/birth-city.svelte"),
	() => import("../../src/routes/generations/index.svelte"),
	() => import("../../src/routes/generations/orbcity.svelte"),
	() => import("../../src/routes/generations/pop-city.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/sketches/colours01.svelte"),
	() => import("../../src/routes/sketches/index.svelte"),
	() => import("../../src/routes/sketches/light01.svelte"),
	() => import("../../src/routes/sketches/light02.svelte"),
	() => import("../../src/routes/sketches/mercurial01.svelte"),
	() => import("../../src/routes/sketches/mercurial02.svelte"),
	() => import("../../src/routes/sketches/perspective01.svelte"),
	() => import("../../src/routes/sketches/structured01.svelte"),
	() => import("../../src/routes/sketches/structured02.svelte")
];

export const dictionary = {
	"": [[0, 8], [1]],
	"generations": [[0, 5], [1]],
	"sketches": [[0, 2, 10], [1]],
	"generations/amazarashi": [[0, 3], [1]],
	"generations/birth-city": [[0, 4], [1]],
	"generations/orbcity": [[0, 6], [1]],
	"generations/pop-city": [[0, 7], [1]],
	"sketches/colours01": [[0, 2, 9], [1]],
	"sketches/light01": [[0, 2, 11], [1]],
	"sketches/light02": [[0, 2, 12], [1]],
	"sketches/mercurial01": [[0, 2, 13], [1]],
	"sketches/mercurial02": [[0, 2, 14], [1]],
	"sketches/perspective01": [[0, 2, 15], [1]],
	"sketches/structured01": [[0, 2, 16], [1]],
	"sketches/structured02": [[0, 2, 17], [1]]
};