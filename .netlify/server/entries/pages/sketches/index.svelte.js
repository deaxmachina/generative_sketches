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
  default: () => Sketches_1
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("../../../immutable/chunks/index-6c951edd.js");
var import_Sketches_b197e99f = require("../../../immutable/chunks/Sketches-b197e99f.js");
var import_stores_4d9952ce = require("../../../immutable/chunks/stores-4d9952ce.js");
var import_RectAreaLightHelper_f103a0a2 = require("../../../immutable/chunks/RectAreaLightHelper-f103a0a2.js");
var import_glslify = require("glslify");
var import_lodash = require("lodash");
var import_lil_gui = require("lil-gui");
var import_simplex_noise = require("simplex-noise");
const Sketches_1 = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_6c951edd.v)(import_Sketches_b197e99f.S, "Sketches").$$render($$result, {}, {}, {})}`;
});
