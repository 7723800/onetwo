<script setup lang="ts">
const items: Array<number> = [0, 1, 2, 3, 4]

</script>

<template>
  <div class="dummy-grid">
    <div class="menu">
      <div v-for="item in items" :key="item" class="menu-item">
        <div class="menu-image">
        </div>
        <div class="menu-label"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.dummy-grid {
  @include get-media($laptop, $desktop) {
    width: 100%;
  }
  .menu {
    @include get-media($laptop, $desktop) {
      overflow: hidden;
    }
    &-label {
      width: 50%;
      height: 1.25rem;
      border-radius: 2px;
      @include bgLoadingAnimation;
    }
    &-image {
      height: calc(100vw / 1.6);
      box-shadow: none;
      @include bgLoadingAnimation;
      @include get-media($laptop) {
        width: calc((#{$laptop-width} - 6rem) / 5);
        height: calc((#{$laptop-width} - 6rem) / 5);
      }
      @include get-media($desktop) {
        width: calc((#{$desktop-width} - 9rem) / 5);
        height: calc((#{$desktop-width} - 9rem) / 5);
      }
    }
  }
}
</style>

