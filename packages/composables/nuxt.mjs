/* NOTE - https://nuxt.com/docs/guide/going-further/modules */

import { defineNuxtModule, addImportsDir, createResolver } from "@nuxt/kit";
export default defineNuxtModule({
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addImportsDir(resolver.resolve("src"));
  },
});
