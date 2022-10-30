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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("../../../immutable/chunks/index-6c951edd.js");
var import_global_8795b219 = require("../../../immutable/chunks/global-8795b219.js");
var import_sketchesData = __toESM(require("../../endpoints/generations/sketchesData.js"));
var import_paths_1c47712a = require("../../../immutable/chunks/paths-1c47712a.js");
var import_stores_4d9952ce = require("../../../immutable/chunks/stores-4d9952ce.js");
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.wrapper.svelte-p8snnr{display:flex;margin:0 auto}.side-menu-wrapper.svelte-p8snnr{flex:0 1 300px}.main-content-wrapper.svelte-p8snnr{flex:0 1 1500px;margin:0 auto;text-align:center}@media(max-width: 1000px){div.wrapper.svelte-p8snnr{flex-direction:column}.side-menu-wrapper.svelte-p8snnr{flex:1}.main-content-wrapper.svelte-p8snnr{flex:0 1;width:100%}}",
  map: null
};
const _layout = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-p8snnr"}"><div class="${"side-menu-wrapper svelte-p8snnr"}">${(0, import_index_6c951edd.v)(import_global_8795b219.S, "SideMenu").$$render($$result, { sketchesData: import_sketchesData.default, sketchType: "generations" }, {}, {})}</div>
    <div class="${"main-content-wrapper svelte-p8snnr"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
