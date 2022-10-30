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
  default: () => U5Bslugu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("../../../../immutable/chunks/index-6c951edd.js");
var import_stores_4d9952ce = require("../../../../immutable/chunks/stores-4d9952ce.js");
var import_stores_94f36854 = require("../../../../immutable/chunks/stores-94f36854.js");
var import_Generations_a6f8f3b2 = require("../../../../immutable/chunks/Generations-a6f8f3b2.js");
var import_RectAreaLightHelper_f103a0a2 = require("../../../../immutable/chunks/RectAreaLightHelper-f103a0a2.js");
var import_glslify = require("glslify");
var import_lodash = require("lodash");
var import_lil_gui = require("lil-gui");
var import_simplex_noise = require("simplex-noise");
const U5Bslugu5D = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let slug;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_6c951edd.a)(import_stores_94f36854.p, (value) => $page = value);
  slug = $page.params.slug;
  {
    {
      import_stores_4d9952ce.s.set(slug);
    }
  }
  $$unsubscribe_page();
  return `${(0, import_index_6c951edd.v)(import_Generations_a6f8f3b2.G, "Generations").$$render($$result, {}, {}, {})}`;
});
