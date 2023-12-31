// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/academy/'
  },
    plugins: [
      '~/plugins/mdi.ts',
       '~/plugins/notifications.client.ts',
  ],
      css: ['@/assets/css/main.scss'],
 
})
