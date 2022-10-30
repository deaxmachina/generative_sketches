import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-6c951edd.js";
import { S as SideMenu } from "../../../immutable/chunks/global-8795b219.js";
import sketchesData from "../../endpoints/generations/sketchesData.js";
import "../../../immutable/chunks/paths-1c47712a.js";
import "../../../immutable/chunks/stores-4d9952ce.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.wrapper.svelte-p8snnr{display:flex;margin:0 auto}.side-menu-wrapper.svelte-p8snnr{flex:0 1 300px}.main-content-wrapper.svelte-p8snnr{flex:0 1 1500px;margin:0 auto;text-align:center}@media(max-width: 1000px){div.wrapper.svelte-p8snnr{flex-direction:column}.side-menu-wrapper.svelte-p8snnr{flex:1}.main-content-wrapper.svelte-p8snnr{flex:0 1;width:100%}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-p8snnr"}"><div class="${"side-menu-wrapper svelte-p8snnr"}">${validate_component(SideMenu, "SideMenu").$$render($$result, { sketchesData, sketchType: "generations" }, {}, {})}</div>
    <div class="${"main-content-wrapper svelte-p8snnr"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export { _layout as default };
