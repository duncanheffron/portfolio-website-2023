// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    '@nuxt/content',
    'nuxt-swiper'
  ],
  css: ["@/assets/scss/style.scss"],
  devtools: true,
})
