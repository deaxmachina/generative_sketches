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
  default: () => sketchesData
});
module.exports = __toCommonJS(stdin_exports);
var import_paths_1c47712a = require("../../../immutable/chunks/paths-1c47712a.js");
const sketchesData = [
  {
    key: "mercurial01",
    url: `${import_paths_1c47712a.b}/images/optimised/mercurial01.jpg`
  },
  {
    key: "mercurial02",
    url: `${import_paths_1c47712a.b}/images/optimised/mercurial02.jpg`
  },
  {
    key: "light01",
    url: `${import_paths_1c47712a.b}/images/optimised/light01.jpg`
  },
  {
    key: "structured01",
    url: `${import_paths_1c47712a.b}/images/optimised/structured01.jpg`
  },
  {
    key: "structured02",
    url: `${import_paths_1c47712a.b}/images/optimised/structured02.jpg`
  },
  {
    key: "colours01",
    url: `${import_paths_1c47712a.b}/images/optimised/colours01.jpg`
  },
  {
    key: "perspective01",
    url: `${import_paths_1c47712a.b}/images/optimised/perspective01.jpg`
  }
];
