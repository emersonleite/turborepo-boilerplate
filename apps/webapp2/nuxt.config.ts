// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "../webapp",

  css: ["@/assets/main.scss"],

  app: {
    head: {
      title: "Web App 2",
      titleTemplate: "%s",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *;',
        },
      },
    },
  },
});
