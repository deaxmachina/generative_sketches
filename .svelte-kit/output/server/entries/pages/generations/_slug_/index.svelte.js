import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../immutable/chunks/index-6c951edd.js";
import { s as selectedWork } from "../../../../immutable/chunks/stores-4d9952ce.js";
import { p as page } from "../../../../immutable/chunks/stores-94f36854.js";
import { G as Generations } from "../../../../immutable/chunks/Generations-a6f8f3b2.js";
/* empty css                                            */import "../../../../immutable/chunks/RectAreaLightHelper-f103a0a2.js";
import "glslify";
import "lodash";
import "lil-gui";
import "simplex-noise";
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slug;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  slug = $page.params.slug;
  {
    {
      selectedWork.set(slug);
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Generations, "Generations").$$render($$result, {}, {}, {})}`;
});
export { U5Bslugu5D as default };
