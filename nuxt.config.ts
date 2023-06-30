export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  css: ['@/assets/scss/style.scss'],
  devtools: false,
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    'nuxt-lodash',
    'nuxt-swiper'
  ],
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
      xxxl: 2560
    }
  }
});
