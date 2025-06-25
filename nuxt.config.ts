import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/styles/tailwind.css'],
  modules: [],
  router: {
    options: {
      linkActiveClass: 'text-blue-800',
    },
  },
})
