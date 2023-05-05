// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    '@nuxt/content',
    'nuxt-lodash',
    'nuxt-swiper'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    }
  },
  css: ["@/assets/scss/style.scss"],
  devtools: false
})
