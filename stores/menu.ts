import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})