var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  G: () => Generations
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("./index-6c951edd.js");
var import_stores_4d9952ce = require("./stores-4d9952ce.js");
var import_RectAreaLightHelper_f103a0a2 = require("./RectAreaLightHelper-f103a0a2.js");
var import_glslify = require("glslify");
var import_lodash = require("lodash");
var import_lil_gui = require("lil-gui");
var import_simplex_noise = require("simplex-noise");
var Amazarashi_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '@keyframes svelte-1wax4m0-blur-animate{0%{filter:brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(0px)}75%{filter:brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(0px)}100%{filter:brightness(1.3) invert(0.17) saturate(2.6) sepia(0.25) blur(1px)}}#simple-cube-wrapper.svelte-1wax4m0{width:90%;max-width:800px;height:800px;margin:auto;margin-top:50px;cursor:crosshair}#simple-cube-wrapper.svelte-1wax4m0::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;filter:brightness(0.8) hue-rotate(350deg) saturate(3) blur(0px) contrast(0.6);background-image:url("https://mj-gallery.com/5b746a7b-e9a9-48d2-8f77-0cd27c3a9679/grid_0.png");background-size:cover;background-repeat:no-repeat;background-size:90%;background-position:center;opacity:1}canvas.svelte-1wax4m0{position:relative;width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(216, 184, 207, 0.808)}',
  map: null
};
const Amazarashi = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let width;
  let height;
  let aspect;
  let canvas;
  let widthContainer;
  let heightContainer;
  let camera = void 0;
  $$result.css.add(css$4);
  width = widthContainer;
  height = heightContainer;
  aspect = width / height;
  {
    if (aspect && camera) {
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }
  }
  return `<div class="${"wrapper svelte-1wax4m0"}" id="${"simple-cube-wrapper"}"><canvas class="${"svelte-1wax4m0"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var RectAreaLight_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".wrapper.svelte-1h5199h{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;cursor:crosshair}@media(max-width: 900px){.wrapper.svelte-1h5199h{min-height:70vh}}#rect-area-wrapper.svelte-1h5199h{width:100%;max-width:800px;margin:auto}canvas.svelte-1h5199h{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const RectAreaLight = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  (0, import_simplex_noise.createNoise2D)();
  $$result.css.add(css$3);
  return `

<div class="${"wrapper svelte-1h5199h"}"><div id="${"rect-area-wrapper"}" class="${"svelte-1h5199h"}"><canvas class="${"svelte-1h5199h"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas></div>
</div>`;
});
var CubeFace_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-nv0xls{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;position:relative}@media(max-width: 900px){.wrapper.svelte-nv0xls{min-height:70vh}}#birth-city-wrapper.svelte-nv0xls{width:100%;max-width:800px;margin:auto}canvas.svelte-nv0xls{position:relative;width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}button.svelte-nv0xls{position:absolute;z-index:100;top:2px;left:2px;border:1px dashed #d69d0d;color:#d69d0d;font-weight:bold;background:none;padding:1rem;cursor:crosshair;margin:auto}button.svelte-nv0xls:hover{border:1px solid #fff;color:#fff;background:#2b207a}",
  map: null
};
const CubeFace = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css$2);
  return `<div class="${"wrapper svelte-nv0xls"}"><div id="${"birth-city-wrapper"}" class="${"svelte-nv0xls"}"><button class="${"svelte-nv0xls"}">toggle glitch</button>
    <canvas class="${"svelte-nv0xls"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas></div>
</div>`;
});
var ManyCubes_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-1epjftq{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center}@media(max-width: 900px){.wrapper.svelte-1epjftq{min-height:70vh}}#many-cubes-wrapper.svelte-1epjftq{width:100%;max-width:800px;margin:auto}canvas.svelte-1epjftq{position:relative;width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const ManyCubes = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { noise2D = (0, import_simplex_noise.createNoise2D)() } = $$props;
  if ($$props.noise2D === void 0 && $$bindings.noise2D && noise2D !== void 0)
    $$bindings.noise2D(noise2D);
  $$result.css.add(css$1);
  return `

<div class="${"wrapper svelte-1epjftq"}"><div id="${"many-cubes-wrapper"}" class="${"svelte-1epjftq"}"><canvas class="${"svelte-1epjftq"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas></div>
</div>`;
});
var PopCity_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-fs6lhf{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center}@media(max-width: 900px){.wrapper.svelte-fs6lhf{min-height:70vh}}#simple-cube-wrapper.svelte-fs6lhf{width:100%;max-width:900px;margin:auto}canvas.svelte-fs6lhf{position:relative;width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const cameraZoom = 3;
const PopCity = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let width;
  let height;
  let aspect;
  let canvas;
  let widthContainer;
  let camera = void 0;
  $$result.css.add(css);
  width = widthContainer;
  height = widthContainer * 1.1;
  aspect = width / height;
  {
    if (aspect && camera) {
      camera.aspect = aspect;
      camera.left = -cameraZoom * aspect;
      camera.right = cameraZoom * aspect;
      camera.updateProjectionMatrix();
    }
  }
  return `

<div class="${"wrapper svelte-fs6lhf"}"><div id="${"simple-cube-wrapper"}" class="${"svelte-fs6lhf"}"><canvas class="${"svelte-fs6lhf"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas></div>
</div>`;
});
const Generations = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let $selectedWork, $$unsubscribe_selectedWork;
  $$unsubscribe_selectedWork = (0, import_index_6c951edd.a)(import_stores_4d9952ce.s, (value) => $selectedWork = value);
  $$unsubscribe_selectedWork();
  return `${$selectedWork === "amazarashi" ? `${(0, import_index_6c951edd.v)(Amazarashi, "Amazarashi").$$render($$result, {}, {}, {})}` : `${$selectedWork === "city-cubes" ? `${(0, import_index_6c951edd.v)(RectAreaLight, "RectAreaLight").$$render($$result, {}, {}, {})}` : `${$selectedWork === "cube-face" ? `${(0, import_index_6c951edd.v)(CubeFace, "CubeFace").$$render($$result, {}, {}, {})}` : `${$selectedWork === "many-cubes" ? `${(0, import_index_6c951edd.v)(ManyCubes, "ManyCubes").$$render($$result, {}, {}, {})}` : `${$selectedWork === "pop-city" ? `${(0, import_index_6c951edd.v)(PopCity, "PopCity").$$render($$result, {}, {}, {})}` : `<h1>This page does not exist... yet</h1>`}`}`}`}`}`;
});
