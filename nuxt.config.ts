// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      /** Formspree form ID (from https://formspree.io/f/YOUR_ID) — leave empty to use mailto fallback */
      formspreeId: process.env.NUXT_PUBLIC_FORMSPREE_ID || "",
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  experimental: { appManifest: false },
  modules: ["@nuxt/icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
});
