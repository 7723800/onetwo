// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/main.scss";',
            },
        },
    },
  },
  modules: [
    '@pinia/nuxt'
  ],
  devtools: {
    enabled: true
  },
  // lazyLoad: {
  //   images: true,
  //   videos: true,
  //   audios: true,
  //   iframes: true,
  //   native: false,
  //   directiveOnly: true,
  //   loadingClass: 'isLoading',
  //   loadedClass: 'isLoaded',
  //   appendClass: 'lazyLoad',
  //   observerConfig: {
  //     // See IntersectionObserver documentation
  //   }
  // },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL,
    },
  }
})
