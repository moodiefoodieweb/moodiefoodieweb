import { defineNuxtConfig } from "@nuxt/bridge";

import "intersection-observer";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  target: "static",
  plugins: ["~/plugins/font-awesome.js"],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css",
    "@/assets/scss/app.scss",
  ],
  postcss: {
    plugins: {
      autoprefixer: true,
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
});
