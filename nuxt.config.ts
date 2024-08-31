// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'storeToRefs'],
    },
  ]],
  devtools: { enabled: true }
})
