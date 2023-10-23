import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      menu: Array<Category>()
    }
  },
  actions: {
    setCategories(payload: Array<Category>) {
      this.$patch({ menu: payload })
    },
  },
  getters: {
    categories: state => state.menu
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
})