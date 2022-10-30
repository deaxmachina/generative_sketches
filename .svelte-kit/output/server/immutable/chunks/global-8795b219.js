import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, f as add_styles } from "./index-6c951edd.js";
import { b as base } from "./paths-1c47712a.js";
import { s as selectedWork } from "./stores-4d9952ce.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu-container.svelte-waay1s.svelte-waay1s{height:100vh;overflow-y:scroll;padding:0;margin:0}.menu-main-container.svelte-waay1s.svelte-waay1s{display:flex;flex-direction:column;padding:0;margin:0}.image-container.svelte-waay1s.svelte-waay1s{width:150px;height:150px;margin-bottom:5px;cursor:crosshair}.image-container.svelte-waay1s img.svelte-waay1s{width:150px;height:150px;transition:all 0.3s ease}.image-container.svelte-waay1s img.svelte-waay1s:hover{transform:scale(0.98)}@media(max-width: 1000px){.menu-container.svelte-waay1s.svelte-waay1s{height:100%;overflow-x:scroll}.menu-main-container.svelte-waay1s.svelte-waay1s{display:flex;flex-direction:row}}",
  map: null
};
const SideMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedWork, $$unsubscribe_selectedWork;
  $$unsubscribe_selectedWork = subscribe(selectedWork, (value) => $selectedWork = value);
  let { sketchesData } = $$props;
  let { sketchType } = $$props;
  if ($$props.sketchesData === void 0 && $$bindings.sketchesData && sketchesData !== void 0)
    $$bindings.sketchesData(sketchesData);
  if ($$props.sketchType === void 0 && $$bindings.sketchType && sketchType !== void 0)
    $$bindings.sketchType(sketchType);
  $$result.css.add(css);
  $$unsubscribe_selectedWork();
  return `<section class="${"menu-container svelte-waay1s"}"><div class="${"menu-main-container svelte-waay1s"}">${each(sketchesData, (image) => {
    return `<a href="${escape(base, true) + "/" + escape(sketchType, true) + "/" + escape(image.key, true)}" class="${"image-container svelte-waay1s"}"><img${add_attribute("src", image.url, 0)} alt="${"stuff"}" class="${"svelte-waay1s"}"${add_styles({
      "filter": image.key !== $selectedWork ? "grayscale(1)" : "grayscale(0)"
    })}>
                </a>`;
  })}</div>
</section>`;
});
var global = '@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Oxanium:wght@200;300;400;500&family=Rubik+Maze&family=Seaweed+Script&family=VT323&display=swap");\nbody {\n  background-color: #ffffff;\n}\nbody, * {\n  margin: 0;\n  padding: 0;\n  font-family: "Courier New", Courier, monospace;\n  box-sizing: border-box;\n}\n.bg {\n  position: absolute;\n  top: 0;\n  left: -50%;\n  right: -50%;\n  bottom: 0;\n  width: 200%;\n  height: 100%;\n  background: rgb(255, 253, 247) url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;\n  background-repeat: repeat;\n  animation: bg-animation 0.9s infinite;\n  opacity: 0.5;\n  visibility: visible;\n}\n@keyframes bg-animation {\n  0% {\n    transform: translate(0, 0);\n  }\n  10% {\n    transform: translate(-5%, 0);\n  }\n  20% {\n    transform: translate(-10%, 0);\n  }\n  30% {\n    transform: translate(5%, 0);\n  }\n  40% {\n    transform: translate(-5%, 0);\n  }\n  50% {\n    transform: translate(-10%, 0);\n  }\n  60% {\n    transform: translate(15%, 0);\n  }\n  70% {\n    transform: translate(0, 0);\n  }\n  80% {\n    transform: translate(-15%, 0);\n  }\n  90% {\n    transform: translate(10%, 0);\n  }\n  100% {\n    transform: translate(5%, 0);\n  }\n}';
export { SideMenu as S };
