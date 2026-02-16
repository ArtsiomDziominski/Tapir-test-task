// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://test-task-api.tapir.ws',
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tapir — интернет-магазин кроссовок',
      meta: [
        { name: 'description', content: 'Каталог кроссовок Nike, Adidas, Puma, New Balance и других брендов. Доставка по всей России.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tapir — интернет-магазин кроссовок' },
        { property: 'og:description', content: 'Каталог кроссовок Nike, Adidas, Puma, New Balance и других брендов.' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
