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
  S: () => Sketches
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("./index-6c951edd.js");
var import_stores_4d9952ce = require("./stores-4d9952ce.js");
var import_RectAreaLightHelper_f103a0a2 = require("./RectAreaLightHelper-f103a0a2.js");
var import_glslify = require("glslify");
var import_lodash = require("lodash");
var import_lil_gui = require("lil-gui");
var import_simplex_noise = require("simplex-noise");
var ShaderColours_svelte_svelte_type_style_lang = "";
const css$d = {
  code: "#shader-colours-wrapper.svelte-n3luzd{width:100%;height:100%;margin:auto}canvas.svelte-n3luzd{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const ShaderColours = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { col1 = "#ff595e" } = $$props;
  let { col2 = "#6a4c93" } = $$props;
  if ($$props.col1 === void 0 && $$bindings.col1 && col1 !== void 0)
    $$bindings.col1(col1);
  if ($$props.col2 === void 0 && $$bindings.col2 && col2 !== void 0)
    $$bindings.col2(col2);
  $$result.css.add(css$d);
  return `

<div class="${"wrapper svelte-n3luzd"}" id="${"shader-colours-wrapper"}"><canvas class="${"svelte-n3luzd"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$7 = "";
const css$c = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-air7lv.svelte-air7lv{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-air7lv-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-air7lv.svelte-air7lv{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-air7lv.svelte-air7lv{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-air7lv .left.svelte-air7lv{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-air7lv .left.svelte-air7lv{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-air7lv .left h1.svelte-air7lv{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-air7lv .left button.svelte-air7lv{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-air7lv .left button.svelte-air7lv:hover{border:0.5px dashed #000000;background:white}.layout.svelte-air7lv .right.svelte-air7lv{width:70%;z-index:2;margin-bottom:2rem;max-width:800px}@media(max-width: 1000px){.layout.svelte-air7lv .right.svelte-air7lv{width:100%;padding:0 1rem}}',
  map: null
};
const ShaderColours_1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let col1;
  let col2;
  $$result.css.add(css$c);
  return `<div class="${"layout svelte-air7lv"}"><div class="${"left svelte-air7lv"}"><h1 class="${"svelte-air7lv"}">Coloured .01</h1>
    <button class="${"svelte-air7lv"}">re-generate</button></div>
  <div class="${"right svelte-air7lv"}">${(0, import_index_6c951edd.v)(ShaderColours, "ShaderColours").$$render($$result, { col1, col2 }, {}, {})}</div>
</div>`;
});
var RectAreaLight_svelte_svelte_type_style_lang$1 = "";
const css$b = {
  code: "#rect-area-wrapper.svelte-1sx4h6r{width:100%;display:flex;align-items:center;justify-content:center;cursor:crosshair}canvas.svelte-1sx4h6r{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const RectAreaLight = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { noise2D } = $$props;
  let { rectLightIntensity } = $$props;
  let { rectLightWidth } = $$props;
  let { rectLightHeight } = $$props;
  if ($$props.noise2D === void 0 && $$bindings.noise2D && noise2D !== void 0)
    $$bindings.noise2D(noise2D);
  if ($$props.rectLightIntensity === void 0 && $$bindings.rectLightIntensity && rectLightIntensity !== void 0)
    $$bindings.rectLightIntensity(rectLightIntensity);
  if ($$props.rectLightWidth === void 0 && $$bindings.rectLightWidth && rectLightWidth !== void 0)
    $$bindings.rectLightWidth(rectLightWidth);
  if ($$props.rectLightHeight === void 0 && $$bindings.rectLightHeight && rectLightHeight !== void 0)
    $$bindings.rectLightHeight(rectLightHeight);
  $$result.css.add(css$b);
  return `

<div class="${"wrapper svelte-1sx4h6r"}" id="${"rect-area-wrapper"}"><canvas class="${"svelte-1sx4h6r"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$6 = "";
const css$a = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-air7lv.svelte-air7lv{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-air7lv-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-air7lv.svelte-air7lv{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-air7lv.svelte-air7lv{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-air7lv .left.svelte-air7lv{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-air7lv .left.svelte-air7lv{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-air7lv .left h1.svelte-air7lv{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-air7lv .left button.svelte-air7lv{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-air7lv .left button.svelte-air7lv:hover{border:0.5px dashed #000000;background:white}.layout.svelte-air7lv .right.svelte-air7lv{width:70%;z-index:2;margin-bottom:2rem;max-width:800px}@media(max-width: 1000px){.layout.svelte-air7lv .right.svelte-air7lv{width:100%;padding:0 1rem}}',
  map: null
};
const RectAreaLight_1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let rectLightIntensity = 10;
  let rectLightWidth = 2;
  let rectLightHeight = 3;
  let noise2D = (0, import_simplex_noise.createNoise2D)();
  $$result.css.add(css$a);
  return `<div class="${"layout svelte-air7lv"}"><div class="${"left svelte-air7lv"}"><h1 class="${"svelte-air7lv"}">Light .01</h1>
    <button class="${"svelte-air7lv"}">re-generate</button></div>
  <div class="${"right svelte-air7lv"}">
    ${(0, import_index_6c951edd.v)(RectAreaLight, "RectAreaLight").$$render($$result, {
    rectLightIntensity,
    rectLightWidth,
    rectLightHeight,
    noise2D
  }, {}, {})}</div>
</div>`;
});
var RectAreaLight_svelte_svelte_type_style_lang = "";
var index_svelte_svelte_type_style_lang$5 = "";
var ShaderShapes_svelte_svelte_type_style_lang$1 = "";
const css$9 = {
  code: "#shader-colours-wrapper.svelte-17hpy8e{width:100%;height:100%;margin:auto;cursor:crosshair}canvas.svelte-17hpy8e{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const ShaderShapes$2 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { colHills = "#fff" } = $$props;
  let { colSun = "#9e164d" } = $$props;
  let { hillValue = 0.5 } = $$props;
  if ($$props.colHills === void 0 && $$bindings.colHills && colHills !== void 0)
    $$bindings.colHills(colHills);
  if ($$props.colSun === void 0 && $$bindings.colSun && colSun !== void 0)
    $$bindings.colSun(colSun);
  if ($$props.hillValue === void 0 && $$bindings.hillValue && hillValue !== void 0)
    $$bindings.hillValue(hillValue);
  $$result.css.add(css$9);
  return `

<div class="${"wrapper svelte-17hpy8e"}" id="${"shader-colours-wrapper"}"><canvas class="${"svelte-17hpy8e"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$4 = "";
const css$8 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-1627w20.svelte-1627w20{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-1627w20-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-1627w20.svelte-1627w20{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-1627w20.svelte-1627w20{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-1627w20 .left.svelte-1627w20{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-1627w20 .left.svelte-1627w20{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-1627w20 .left h1.svelte-1627w20{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-1627w20 .left button.svelte-1627w20{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-1627w20 .left button.svelte-1627w20:hover{border:0.5px dashed #000000;background:white}.layout.svelte-1627w20 .right.svelte-1627w20{width:70%;z-index:2;margin-bottom:2rem;max-width:900px}@media(max-width: 1000px){.layout.svelte-1627w20 .right.svelte-1627w20{width:100%;padding:0 1rem}}',
  map: null
};
const ShaderShapes$1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let colHills;
  let colSun;
  let hillValue;
  $$result.css.add(css$8);
  return `<div class="${"layout svelte-1627w20"}"><div class="${"left svelte-1627w20"}"><h1 class="${"svelte-1627w20"}">Mercurial .01</h1>
    <button class="${"svelte-1627w20"}">re-generate</button></div>
  <div class="${"right svelte-1627w20"}">${(0, import_index_6c951edd.v)(ShaderShapes$2, "ShaderColours").$$render($$result, { colHills, colSun, hillValue }, {}, {})}</div>
</div>`;
});
var ShaderShapes_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "#shader-colours-wrapper.svelte-17hpy8e{width:100%;height:100%;margin:auto;cursor:crosshair}canvas.svelte-17hpy8e{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const ShaderShapes = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { colHills = "#fff" } = $$props;
  let { hillValue = 0.5 } = $$props;
  let { col1 = "#3d5a80" } = $$props;
  let { col2 = "#ffffff" } = $$props;
  if ($$props.colHills === void 0 && $$bindings.colHills && colHills !== void 0)
    $$bindings.colHills(colHills);
  if ($$props.hillValue === void 0 && $$bindings.hillValue && hillValue !== void 0)
    $$bindings.hillValue(hillValue);
  if ($$props.col1 === void 0 && $$bindings.col1 && col1 !== void 0)
    $$bindings.col1(col1);
  if ($$props.col2 === void 0 && $$bindings.col2 && col2 !== void 0)
    $$bindings.col2(col2);
  $$result.css.add(css$7);
  return `

<div class="${"wrapper svelte-17hpy8e"}" id="${"shader-colours-wrapper"}"><canvas class="${"svelte-17hpy8e"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$3 = "";
const css$6 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-air7lv.svelte-air7lv{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-air7lv-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-air7lv.svelte-air7lv{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-air7lv.svelte-air7lv{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-air7lv .left.svelte-air7lv{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-air7lv .left.svelte-air7lv{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-air7lv .left h1.svelte-air7lv{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-air7lv .left button.svelte-air7lv{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-air7lv .left button.svelte-air7lv:hover{border:0.5px dashed #000000;background:white}.layout.svelte-air7lv .right.svelte-air7lv{width:70%;z-index:2;margin-bottom:2rem;max-width:800px}@media(max-width: 1000px){.layout.svelte-air7lv .right.svelte-air7lv{width:100%;padding:0 1rem}}',
  map: null
};
const ShaderShapes2 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let col1;
  let hillValue;
  $$result.css.add(css$6);
  return `<div class="${"layout svelte-air7lv"}"><div class="${"left svelte-air7lv"}"><h1 class="${"svelte-air7lv"}">Mercurial .02</h1>
    <button class="${"svelte-air7lv"}">re-generate</button></div>
  <div class="${"right svelte-air7lv"}">${(0, import_index_6c951edd.v)(ShaderShapes, "ShaderColours").$$render($$result, { col1, hillValue }, {}, {})}</div>
</div>`;
});
var TrackballControlsExample_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#simple-cube-wrapper.svelte-1j2hdhd{width:100%;height:100%;margin:auto;cursor:crosshair}canvas.svelte-1j2hdhd{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const cameraZoom = 2;
const TrackballControlsExample = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let width;
  let height;
  let aspect;
  let { backgroundColour } = $$props;
  let { colour: colour2 = "#ffff" } = $$props;
  let { geometryType } = $$props;
  let canvas;
  let widthContainer;
  let camera = void 0;
  if ($$props.backgroundColour === void 0 && $$bindings.backgroundColour && backgroundColour !== void 0)
    $$bindings.backgroundColour(backgroundColour);
  if ($$props.colour === void 0 && $$bindings.colour && colour2 !== void 0)
    $$bindings.colour(colour2);
  if ($$props.geometryType === void 0 && $$bindings.geometryType && geometryType !== void 0)
    $$bindings.geometryType(geometryType);
  $$result.css.add(css$5);
  width = widthContainer;
  height = widthContainer * 1;
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

<div class="${"wrapper svelte-1j2hdhd"}" id="${"simple-cube-wrapper"}"><canvas class="${"svelte-1j2hdhd"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$2 = "";
const css$4 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-xuaakt.svelte-xuaakt{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-xuaakt-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-xuaakt.svelte-xuaakt{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh;min-height:100vh}@media(max-width: 1000px){.layout.svelte-xuaakt.svelte-xuaakt{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-xuaakt .left.svelte-xuaakt{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-xuaakt .left.svelte-xuaakt{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-xuaakt .left h1.svelte-xuaakt{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-xuaakt .left button.svelte-xuaakt{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-xuaakt .left button.svelte-xuaakt:hover{border:0.5px dashed #000000;background:white}.layout.svelte-xuaakt .right.svelte-xuaakt{width:70%;z-index:2;margin-bottom:2rem;max-width:800px}@media(max-width: 1000px){.layout.svelte-xuaakt .right.svelte-xuaakt{width:100%;padding:0 1rem}}',
  map: null
};
let colour = "#ffff";
const TrackballControlsExperiment = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let backgroundColour = "#5ca4a9";
  let geometryType = "BoxGeometry";
  $$result.css.add(css$4);
  return `<div class="${"layout svelte-xuaakt"}"><div class="${"left svelte-xuaakt"}"><h1 class="${"svelte-xuaakt"}">Perspective .01</h1>
    <button class="${"svelte-xuaakt"}">re-generate
    </button></div>
  <div class="${"right svelte-xuaakt"}"${(0, import_index_6c951edd.f)({ "max-width": `950px` })}>${(0, import_index_6c951edd.v)(TrackballControlsExample, "TrackballControlsExample").$$render($$result, { colour, geometryType, backgroundColour }, {}, {})}</div>
</div>`;
});
var HemisphereLight_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: "#hemi-light-wrapper.svelte-qdett3{width:100%;display:flex;align-items:center;justify-content:center;cursor:crosshair}canvas.svelte-qdett3{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const HemisphereLight$1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { noise2D = (0, import_simplex_noise.createNoise2D)() } = $$props;
  if ($$props.noise2D === void 0 && $$bindings.noise2D && noise2D !== void 0)
    $$bindings.noise2D(noise2D);
  $$result.css.add(css$3);
  return `

<div class="${"wrapper svelte-qdett3"}" id="${"hemi-light-wrapper"}"><canvas class="${"svelte-qdett3"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-1627w20.svelte-1627w20{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-1627w20-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-1627w20.svelte-1627w20{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-1627w20.svelte-1627w20{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-1627w20 .left.svelte-1627w20{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-1627w20 .left.svelte-1627w20{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-1627w20 .left h1.svelte-1627w20{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-1627w20 .left button.svelte-1627w20{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-1627w20 .left button.svelte-1627w20:hover{border:0.5px dashed #000000;background:white}.layout.svelte-1627w20 .right.svelte-1627w20{width:70%;z-index:2;margin-bottom:2rem;max-width:900px}@media(max-width: 1000px){.layout.svelte-1627w20 .right.svelte-1627w20{width:100%;padding:0 1rem}}',
  map: null
};
const HemisphereLight_1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let noise2DHemisphereLight = (0, import_simplex_noise.createNoise2D)();
  $$result.css.add(css$2);
  return `<div class="${"layout svelte-1627w20"}">
  <div class="${"left svelte-1627w20"}"><h1 class="${"svelte-1627w20"}">Structured .01</h1>
    <button class="${"svelte-1627w20"}">re-generate</button></div>
  <div class="${"right svelte-1627w20"}">${(0, import_index_6c951edd.v)(HemisphereLight$1, "HemisphereLight").$$render($$result, { noise2D: noise2DHemisphereLight }, {}, {})}</div>
</div>`;
});
var HemisphereLight_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#hemi-light-wrapper.svelte-qdett3{width:100%;display:flex;align-items:center;justify-content:center;cursor:crosshair}canvas.svelte-qdett3{width:100%;box-sizing:border-box;box-shadow:2px 2px 10px rgba(119, 108, 116, 0.808)}",
  map: null
};
const HemisphereLight = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let { noise2D = (0, import_simplex_noise.createNoise2D)() } = $$props;
  if ($$props.noise2D === void 0 && $$bindings.noise2D && noise2D !== void 0)
    $$bindings.noise2D(noise2D);
  $$result.css.add(css$1);
  return `

<div class="${"wrapper svelte-qdett3"}" id="${"hemi-light-wrapper"}"><canvas class="${"svelte-qdett3"}"${(0, import_index_6c951edd.d)("this", canvas, 0)}></canvas>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");.svelte-1627w20.svelte-1627w20{margin:0;padding:0;font-family:"Courier New", Courier, monospace;box-sizing:border-box}@keyframes svelte-1627w20-bg-animation{0%{transform:translate(0, 0)}10%{transform:translate(-5%, 0)}20%{transform:translate(-10%, 0)}30%{transform:translate(5%, 0)}40%{transform:translate(-5%, 0)}50%{transform:translate(-10%, 0)}60%{transform:translate(15%, 0)}70%{transform:translate(0, 0)}80%{transform:translate(-15%, 0)}90%{transform:translate(10%, 0)}100%{transform:translate(5%, 0)}}.layout.svelte-1627w20.svelte-1627w20{box-sizing:border-box;position:relative;width:100%;padding:5rem 3rem 5rem 3rem;display:flex;justify-content:space-around;align-items:center;min-height:100vh}@media(max-width: 1000px){.layout.svelte-1627w20.svelte-1627w20{flex-direction:column;justify-content:flex-start;align-items:center;margin:0 auto;text-align:center;width:100%;padding:0;padding-top:5rem;min-height:20vh}}.layout.svelte-1627w20 .left.svelte-1627w20{width:30%;flex:0 1 300px;color:#000000;text-align:center;padding:0 2rem;display:flex;flex-direction:column;z-index:2}@media(max-width: 1000px){.layout.svelte-1627w20 .left.svelte-1627w20{flex:0 1;width:300px;padding:0;margin-right:0;margin-bottom:2rem}}.layout.svelte-1627w20 .left h1.svelte-1627w20{font-size:1.2rem;text-transform:uppercase;font-family:"Oxanium", cursive;font-weight:200;letter-spacing:6px;transition:all 0.2s ease}.layout.svelte-1627w20 .left button.svelte-1627w20{margin:10px auto;color:#333;border:none;padding:8px 10px;border-radius:2px;background:#fafafa;transition:all 0.6s ease;cursor:crosshair;border:0.5px dashed #fafafa}.layout.svelte-1627w20 .left button.svelte-1627w20:hover{border:0.5px dashed #000000;background:white}.layout.svelte-1627w20 .right.svelte-1627w20{width:70%;z-index:2;margin-bottom:2rem;max-width:900px}@media(max-width: 1000px){.layout.svelte-1627w20 .right.svelte-1627w20{width:100%;padding:0 1rem}}',
  map: null
};
const HemisphereLight2 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let noise2DHemisphereLight = (0, import_simplex_noise.createNoise2D)();
  $$result.css.add(css);
  return `<div class="${"layout svelte-1627w20"}">
  <div class="${"left svelte-1627w20"}"><h1 class="${"svelte-1627w20"}">Structured .02</h1>
    <button class="${"svelte-1627w20"}">re-generate</button></div>
  <div class="${"right svelte-1627w20"}">${(0, import_index_6c951edd.v)(HemisphereLight, "HemisphereLight").$$render($$result, { noise2D: noise2DHemisphereLight }, {}, {})}</div>
</div>`;
});
const Sketches = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let $selectedWork, $$unsubscribe_selectedWork;
  $$unsubscribe_selectedWork = (0, import_index_6c951edd.a)(import_stores_4d9952ce.s, (value) => $selectedWork = value);
  $$unsubscribe_selectedWork();
  return `${$selectedWork === "colours01" ? `${(0, import_index_6c951edd.v)(ShaderColours_1, "ShaderColours").$$render($$result, {}, {}, {})}` : `${$selectedWork === "light01" ? `${(0, import_index_6c951edd.v)(RectAreaLight_1, "RectAreaLight1").$$render($$result, {}, {}, {})}` : `${$selectedWork === "mercurial01" ? `${(0, import_index_6c951edd.v)(ShaderShapes$1, "ShaderShapes1").$$render($$result, {}, {}, {})}` : `${$selectedWork === "mercurial02" ? `${(0, import_index_6c951edd.v)(ShaderShapes2, "ShaderShapes2").$$render($$result, {}, {}, {})}` : `${$selectedWork === "perspective01" ? `${(0, import_index_6c951edd.v)(TrackballControlsExperiment, "TrackballControlsExample").$$render($$result, {}, {}, {})}` : `${$selectedWork === "structured01" ? `${(0, import_index_6c951edd.v)(HemisphereLight_1, "HemisphereLight1").$$render($$result, {}, {}, {})}` : `${$selectedWork === "structured02" ? `${(0, import_index_6c951edd.v)(HemisphereLight2, "HemisphereLight2").$$render($$result, {}, {}, {})}` : `<h1>This page does not exist... yet</h1>`}`}`}`}`}`}`}`;
});
