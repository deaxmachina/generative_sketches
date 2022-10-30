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
  S: () => SideMenu
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6c951edd = require("./index-6c951edd.js");
var import_paths_1c47712a = require("./paths-1c47712a.js");
var import_stores_4d9952ce = require("./stores-4d9952ce.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu-container.svelte-waay1s.svelte-waay1s{height:100vh;overflow-y:scroll;padding:0;margin:0}.menu-main-container.svelte-waay1s.svelte-waay1s{display:flex;flex-direction:column;padding:0;margin:0}.image-container.svelte-waay1s.svelte-waay1s{width:150px;height:150px;margin-bottom:5px;cursor:crosshair}.image-container.svelte-waay1s img.svelte-waay1s{width:150px;height:150px;transition:all 0.3s ease}.image-container.svelte-waay1s img.svelte-waay1s:hover{transform:scale(0.98)}@media(max-width: 1000px){.menu-container.svelte-waay1s.svelte-waay1s{height:100%;overflow-x:scroll}.menu-main-container.svelte-waay1s.svelte-waay1s{display:flex;flex-direction:row}}",
  map: null
};
const SideMenu = (0, import_index_6c951edd.c)(($$result, $$props, $$bindings, slots) => {
  let $selectedWork, $$unsubscribe_selectedWork;
  $$unsubscribe_selectedWork = (0, import_index_6c951edd.a)(import_stores_4d9952ce.s, (value) => $selectedWork = value);
  let { sketchesData } = $$props;
  let { sketchType } = $$props;
  if ($$props.sketchesData === void 0 && $$bindings.sketchesData && sketchesData !== void 0)
    $$bindings.sketchesData(sketchesData);
  if ($$props.sketchType === void 0 && $$bindings.sketchType && sketchType !== void 0)
    $$bindings.sketchType(sketchType);
  $$result.css.add(css);
  $$unsubscribe_selectedWork();
  return `<section class="${"menu-container svelte-waay1s"}"><div class="${"menu-main-container svelte-waay1s"}">${(0, import_index_6c951edd.b)(sketchesData, (image) => {
    return `<a href="${(0, import_index_6c951edd.e)(import_paths_1c47712a.b, true) + "/" + (0, import_index_6c951edd.e)(sketchType, true) + "/" + (0, import_index_6c951edd.e)(image.key, true)}" class="${"image-container svelte-waay1s"}"><img${(0, import_index_6c951edd.d)("src", image.url, 0)} alt="${"stuff"}" class="${"svelte-waay1s"}"${(0, import_index_6c951edd.f)({
      "filter": image.key !== $selectedWork ? "grayscale(1)" : "grayscale(0)"
    })}>
                </a>`;
  })}</div>
</section>`;
});
var global = '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");\nbody {\n  background-color: #ffffff;\n}\nbody, * {\n  margin: 0;\n  padding: 0;\n  font-family: "Courier New", Courier, monospace;\n  box-sizing: border-box;\n}\n.bg {\n  position: absolute;\n  top: 0;\n  left: -50%;\n  right: -50%;\n  bottom: 0;\n  width: 200%;\n  height: 100%;\n  background: rgb(255, 253, 247) url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;\n  background-repeat: repeat;\n  animation: bg-animation 0.9s infinite;\n  opacity: 0.5;\n  visibility: visible;\n}\n@keyframes bg-animation {\n  0% {\n    transform: translate(0, 0);\n  }\n  10% {\n    transform: translate(-5%, 0);\n  }\n  20% {\n    transform: translate(-10%, 0);\n  }\n  30% {\n    transform: translate(5%, 0);\n  }\n  40% {\n    transform: translate(-5%, 0);\n  }\n  50% {\n    transform: translate(-10%, 0);\n  }\n  60% {\n    transform: translate(15%, 0);\n  }\n  70% {\n    transform: translate(0, 0);\n  }\n  80% {\n    transform: translate(-15%, 0);\n  }\n  90% {\n    transform: translate(10%, 0);\n  }\n  100% {\n    transform: translate(5%, 0);\n  }\n}';
