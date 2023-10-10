// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/app.scss";',
            },
        },
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-lazy-load'
  ],
  devtools: {
    enabled: true
  },
  devServer: {
    port: 8080,
  },
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: true,
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    observerConfig: {
      // See IntersectionObserver documentation
    }
  }
})
