export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/generations/__layout.svelte"),
	() => import("../../src/routes/sketches/__layout.svelte"),
	() => import("../../src/routes/generations/amazarashi.svelte"),
	() => import("../../src/routes/generations/city-cubes.svelte"),
	() => import("../../src/routes/generations/cube-face.svelte"),
	() => import("../../src/routes/generations/index.svelte"),
	() => import("../../src/routes/generations/many-cubes.svelte"),
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
	"": [[0, 11], [1]],
	"generations": [[0, 2, 7], [1]],
	"sketches": [[0, 3, 13], [1]],
	"generations/amazarashi": [[0, 2, 4], [1]],
	"generations/city-cubes": [[0, 2, 5], [1]],
	"generations/cube-face": [[0, 2, 6], [1]],
	"generations/many-cubes": [[0, 2, 8], [1]],
	"generations/orbcity": [[0, 2, 9], [1]],
	"generations/pop-city": [[0, 2, 10], [1]],
	"sketches/colours01": [[0, 3, 12], [1]],
	"sketches/light01": [[0, 3, 14], [1]],
	"sketches/light02": [[0, 3, 15], [1]],
	"sketches/mercurial01": [[0, 3, 16], [1]],
	"sketches/mercurial02": [[0, 3, 17], [1]],
	"sketches/perspective01": [[0, 3, 18], [1]],
	"sketches/structured01": [[0, 3, 19], [1]],
	"sketches/structured02": [[0, 3, 20], [1]]
};