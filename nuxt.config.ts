// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr:true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxt/icon',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato:  {
          wght: [100, 400,700],
          ital: [100]
        },
      }
    }],
  ],
})