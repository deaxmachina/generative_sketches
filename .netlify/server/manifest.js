var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "favicon.png", "images/.DS_Store", "images/amazarashi.png", "images/city-cubes.png", "images/colours01.png", "images/cube-face.png", "images/light01.png", "images/light02.png", "images/many-cubes.png", "images/mercurial01.png", "images/mercurial02.png", "images/mercurial_4.gif", "images/mj1.png", "images/mj11.png", "images/mj2.png", "images/mj3.png", "images/mj4.png", "images/mj5.png", "images/mj6.png", "images/mj7.png", "images/optimised/amazarashi.jpg", "images/optimised/city-cubes.jpg", "images/optimised/colours01.jpg", "images/optimised/cube-face.jpg", "images/optimised/light01.jpg", "images/optimised/many-cubes.jpg", "images/optimised/mercurial01.jpg", "images/optimised/mercurial02.jpg", "images/optimised/mj2.jpg", "images/optimised/mj3.jpg", "images/optimised/mj4.jpg", "images/optimised/mj7.jpg", "images/optimised/perspective01.jpg", "images/optimised/pop-city.jpg", "images/optimised/structured01.jpg", "images/optimised/structured02.jpg", "images/perspective01.png", "images/pop-city.png", "images/structured01.png", "images/structured02.png"]),
  mimeTypes: { ".png": "image/png", ".gif": "image/gif", ".jpg": "image/jpeg" },
  _: {
    entry: { "file": "immutable/start-eee916f8.js", "imports": ["immutable/start-eee916f8.js", "immutable/chunks/index-db9954c0.js", "immutable/chunks/index-df29b4c7.js", "immutable/chunks/paths-1c47712a.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "generations",
        pattern: /^\/generations\/?$/,
        names: [],
        types: [],
        path: "/generations",
        shadow: null,
        a: [0, 3, 4],
        b: [1]
      },
      {
        type: "page",
        id: "sketches",
        pattern: /^\/sketches\/?$/,
        names: [],
        types: [],
        path: "/sketches",
        shadow: null,
        a: [0, 5, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "sketches/sketchesData",
        pattern: /^\/sketches\/sketchesData\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/sketches/sketchesData.js")))
      },
      {
        type: "endpoint",
        id: "generations/sketchesData",
        pattern: /^\/generations\/sketchesData\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/generations/sketchesData.js")))
      },
      {
        type: "page",
        id: "generations/[slug]",
        pattern: /^\/generations\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 3, 7],
        b: [1]
      },
      {
        type: "page",
        id: "sketches/[slug]",
        pattern: /^\/sketches\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 5, 8],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
