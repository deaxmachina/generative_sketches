const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/amazarashi.png","images/city-cubes.png","images/colours01.png","images/cube-face.png","images/light01.png","images/light02.png","images/many-cubes.png","images/mercurial01.png","images/mercurial02.png","images/mercurial_4.gif","images/mj1.png","images/mj11.png","images/mj2.png","images/mj3.png","images/mj4.png","images/mj5.png","images/mj6.png","images/mj7.png","images/optimised/amazarashi.jpg","images/optimised/city-cubes.jpg","images/optimised/colours01.jpg","images/optimised/cube-face.jpg","images/optimised/light01.jpg","images/optimised/many-cubes.jpg","images/optimised/mercurial01.jpg","images/optimised/mercurial02.jpg","images/optimised/mj2.jpg","images/optimised/mj3.jpg","images/optimised/mj4.jpg","images/optimised/mj7.jpg","images/optimised/perspective01.jpg","images/optimised/pop-city.jpg","images/optimised/structured01.jpg","images/optimised/structured02.jpg","images/perspective01.png","images/pop-city.png","images/structured01.png","images/structured02.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"immutable/start-eee916f8.js","imports":["immutable/start-eee916f8.js","immutable/chunks/index-db9954c0.js","immutable/chunks/index-df29b4c7.js","immutable/chunks/paths-1c47712a.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "generations",
				pattern: /^\/generations\/?$/,
				names: [],
				types: [],
				path: "/generations",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "sketches",
				pattern: /^\/sketches\/?$/,
				names: [],
				types: [],
				path: "/sketches",
				shadow: null,
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "sketches/sketchesData",
				pattern: /^\/sketches\/sketchesData\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/sketches/sketchesData.js'))
			},
			{
				type: 'endpoint',
				id: "generations/sketchesData",
				pattern: /^\/generations\/sketchesData\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/generations/sketchesData.js'))
			},
			{
				type: 'page',
				id: "generations/[slug]",
				pattern: /^\/generations\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "sketches/[slug]",
				pattern: /^\/sketches\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
