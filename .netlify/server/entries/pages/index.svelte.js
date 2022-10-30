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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("../../immutable/chunks/index-6c951edd.js");
var import_paths_1c47712a = require("../../immutable/chunks/paths-1c47712a.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-1feoo57.svelte-1feoo57{text-decoration:none}.menu-container.svelte-1feoo57.svelte-1feoo57{width:100%;height:100vh;display:flex;flex-direction:row;align-items:center;justify-content:center}.menu-item.svelte-1feoo57.svelte-1feoo57{width:100%;height:100%;flex:1;padding:2px}.menu-item.sketches.svelte-1feoo57.svelte-1feoo57{margin-right:0;text-align:right}.menu-item.sketches.svelte-1feoo57.svelte-1feoo57::before{content:"";position:absolute;top:0;left:0;width:calc(50% - 2px);height:100%;background-image:url("/images/mercurial_4.gif");background-repeat:no-repeat;background-position:center center;background-size:cover;opacity:1}.menu-item.generations.svelte-1feoo57.svelte-1feoo57{text-align:left;margin-left:0}.menu-item.generations.svelte-1feoo57.svelte-1feoo57::before{content:"";position:absolute;top:0;left:calc(50% + 2px);width:calc(50% - 2px);height:100%;filter:brightness(0.7) hue-rotate(350deg) saturate(3) blur(0px) contrast(0.6);background:#461126;background-image:var(--url);background-size:cover;background-repeat:no-repeat;background-position:center;opacity:1}.inside.svelte-1feoo57.svelte-1feoo57{width:100%;height:100%;display:flex;align-items:center;position:relative;cursor:crosshair}.inside.sketches-inside.svelte-1feoo57.svelte-1feoo57{justify-content:flex-end}.inside.generations-inside.svelte-1feoo57.svelte-1feoo57{justify-content:flex-start}.inside.svelte-1feoo57 h1.svelte-1feoo57{transition:all 0.7s ease;padding:5px;font-size:2rem;letter-spacing:3.3px;font-weight:400;color:#fff;text-decoration:none;letter-spacing:2.3px;writing-mode:vertical-rl;text-orientation:upright}@media(max-width: 900px){h1.svelte-1feoo57.svelte-1feoo57{padding:1px 8px;font-size:1.4rem;letter-spacing:2.3px;writing-mode:vertical-rl;text-orientation:upright}}',
  map: null
};
const MainMenu = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let generationUrl = void 0;
  $$result.css.add(css);
  return `<main>
  <div class="${"menu-container svelte-1feoo57"}">
    <a href="${(0, import_index_6c951edd.e)(import_paths_1c47712a.b, true) + "/sketches"}" class="${"menu-item sketches svelte-1feoo57"}"><div class="${"inside sketches-inside svelte-1feoo57"}"><h1 class="${"sketches-title svelte-1feoo57"}"${(0, import_index_6c951edd.f)({
    "background-color": "transparent"
  })}>Sketches</h1></div></a>
    
    <a href="${(0, import_index_6c951edd.e)(import_paths_1c47712a.b, true) + "/generations"}" class="${"menu-item generations svelte-1feoo57"}"${(0, import_index_6c951edd.d)("style", `--url: url(${generationUrl})`, 0)}><div class="${"inside generations-inside svelte-1feoo57"}"><h1 class="${"generations-title svelte-1feoo57"}"${(0, import_index_6c951edd.f)({
    "background-color": "transparent"
  })}>Generations</h1></div></a></div>
</main>`;
});
const Routes = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_6c951edd.v)(MainMenu, "MainMenu").$$render($$result, {}, {}, {})}`;
});
