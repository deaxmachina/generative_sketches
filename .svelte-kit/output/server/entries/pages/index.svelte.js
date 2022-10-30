import { c as create_ssr_component, e as escape, f as add_styles, d as add_attribute, v as validate_component } from "../../immutable/chunks/index-6c951edd.js";
import { b as base } from "../../immutable/chunks/paths-1c47712a.js";
/* empty css                                      */var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'a.svelte-1feoo57.svelte-1feoo57{text-decoration:none}.menu-container.svelte-1feoo57.svelte-1feoo57{width:100%;height:100vh;display:flex;flex-direction:row;align-items:center;justify-content:center}.menu-item.svelte-1feoo57.svelte-1feoo57{width:100%;height:100%;flex:1;padding:2px}.menu-item.sketches.svelte-1feoo57.svelte-1feoo57{margin-right:0;text-align:right}.menu-item.sketches.svelte-1feoo57.svelte-1feoo57::before{content:"";position:absolute;top:0;left:0;width:calc(50% - 2px);height:100%;background-image:url("/images/mercurial_4.gif");background-repeat:no-repeat;background-position:center center;background-size:cover;opacity:1}.menu-item.generations.svelte-1feoo57.svelte-1feoo57{text-align:left;margin-left:0}.menu-item.generations.svelte-1feoo57.svelte-1feoo57::before{content:"";position:absolute;top:0;left:calc(50% + 2px);width:calc(50% - 2px);height:100%;filter:brightness(0.7) hue-rotate(350deg) saturate(3) blur(0px) contrast(0.6);background:#461126;background-image:var(--url);background-size:cover;background-repeat:no-repeat;background-position:center;opacity:1}.inside.svelte-1feoo57.svelte-1feoo57{width:100%;height:100%;display:flex;align-items:center;position:relative;cursor:crosshair}.inside.sketches-inside.svelte-1feoo57.svelte-1feoo57{justify-content:flex-end}.inside.generations-inside.svelte-1feoo57.svelte-1feoo57{justify-content:flex-start}.inside.svelte-1feoo57 h1.svelte-1feoo57{transition:all 0.7s ease;padding:5px;font-size:2rem;letter-spacing:3.3px;font-weight:400;color:#fff;text-decoration:none;letter-spacing:2.3px;writing-mode:vertical-rl;text-orientation:upright}@media(max-width: 900px){h1.svelte-1feoo57.svelte-1feoo57{padding:1px 8px;font-size:1.4rem;letter-spacing:2.3px;writing-mode:vertical-rl;text-orientation:upright}}',
  map: null
};
const MainMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let generationUrl = void 0;
  $$result.css.add(css);
  return `<main>
  <div class="${"menu-container svelte-1feoo57"}">
    <a href="${escape(base, true) + "/sketches"}" class="${"menu-item sketches svelte-1feoo57"}"><div class="${"inside sketches-inside svelte-1feoo57"}"><h1 class="${"sketches-title svelte-1feoo57"}"${add_styles({
    "background-color": "transparent"
  })}>Sketches</h1></div></a>
    
    <a href="${escape(base, true) + "/generations"}" class="${"menu-item generations svelte-1feoo57"}"${add_attribute("style", `--url: url(${generationUrl})`, 0)}><div class="${"inside generations-inside svelte-1feoo57"}"><h1 class="${"generations-title svelte-1feoo57"}"${add_styles({
    "background-color": "transparent"
  })}>Generations</h1></div></a></div>
</main>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainMenu, "MainMenu").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
