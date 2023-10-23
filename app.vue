<script setup lang="ts">
import { Header, Footer } from '#components'
</script>

<template>
  <div>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      <Footer />
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-enter-to {
  opacity: 0;
}
</style>
