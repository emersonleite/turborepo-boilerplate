/* import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
export default defineNuxtModule({
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    console.log(resolve(["./src/_variables.scss", "./src/main.scss"]));

    nuxt.options.css.push(
      resolve(["./src/_variables.scss", "./src/main.scss"])
    );
  },
}); */

/* import { defineNuxtModule, createResolver } from "@nuxt/kit";
export default defineNuxtModule({
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolve(["./src/_variables.scss", "./src/main.scss"]),
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    });
  },
}); */
