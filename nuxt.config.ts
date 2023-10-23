// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "in-out"
    }
  },
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
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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
