<script setup lang="ts">
// import { ref, onMounted, onActivated, onBeforeMount } from 'vue'
import { DummyMenu } from '#components'
import Swiper from 'swiper';
interface NamedParams {
    numOne: number,
    numTwo: number
}

const isPageLoaded = ref<boolean>(false)
const totalSliders = reactive([])
const populars = reactive([])
const categories = reactive([])
const sliders = reactive([])

const calcNumbers = ({numOne, numTwo}: NamedParams): number => {
    return numOne + numTwo
}

const showProductCard = (index: string) => {
    console.log(index);
}
onMounted(() => {
    console.log('Component Mounted');

})
onActivated(() => {
    console.log('Component Activated');
})
onBeforeMount(() => {
    console.log('Component onBeforeMount');
})

</script>

<template>
    <div class="home">
    <div class="container">
      <!-- mobile intro start -->
      <section class="home-events">
        <Transition name="fade-dummy" mode="out-in">
          <div v-if="!isPageLoaded" class="dummy-swiper">
            <div class="dummy-image"></div>
            <div class="dummy-image dummy-image__second"></div>
          </div>
          <div v-else class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for="slider in sliders" class="swiper-slide">
                <client-only>
                  <!-- <vue-load-image> -->
                    <img src="/images/swiper-loader.jpg" class="event-image" v-lazy-load/>
                    <!-- <img slot="preloader" src="/images/swiper-loader.jpg" class="event-image"/> -->
                  <!-- </vue-load-image> -->
                </client-only>
              </div>
            </div>
            <div v-show="isPageLoaded && totalSliders.length > 1" class="swiper-pagination"></div>
          </div>
        </Transition>
        <div v-show="isPageLoaded && totalSliders.length > 2" class="next-events"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
        <div v-show="isPageLoaded && totalSliders.length > 2" class="prev-events"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
      </section>
      <!-- mobile intro end -->
      <section class="home-popular">
        <h1 class="title">Популярное</h1>
        <!-- mobile populars start -->
        <!-- <transition name="fade-dummy" mode="out-in"> -->
          <DummyMenu v-if="!isPageLoaded"></DummyMenu>
          <div v-else class="menu">
            <div v-for="popular in populars" @click="showProductCard('test')" class="menu-item">
              <div class="menu-image">
                <!-- <img v-lazy="popular.product.pictures[0]"/> -->
                <!-- <transition name="scale"> -->
                  <!-- <div v-show="popular.product.quantity" class="in-cart">{{ popular.product.quantity }}</div> -->
                <!-- </transition> -->
              </div>
              <div class="menu-label">popular.product.name</div>
            </div >
          </div>
        <!-- </transition> -->
        <!-- mobile populars end -->
        <!-- widescreen populars start -->
        <div class="menu-widescreen menu-widescreen__popular">
            <dummy-menu v-if="!isPageLoaded"></dummy-menu>
            <div v-else class="swiper-container">
              <div class="swiper-wrapper">
                <div v-for="popular in populars" @click="showProductCard('popular.product')" class="swiper-slide">
                  <div class="menu-widescreen_slide">
                    <!-- <img v-lazy="popular.product.pictures[0]"/> -->
                    <!-- <transition name="scale">
                      <div v-show="popular.product.quantity" class="in-cart">{{ popular.product.quantity }}</div>
                    </transition> -->
                  </div>
                  <div class="menu-label">"popular.product.name"</div>
                </div>
              </div>
            </div>
          <div v-if="isPageLoaded" class="next-popular"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
          <div v-if="isPageLoaded" class="prev-popular swiper-button-disabled"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
        </div>
        <!-- widescreen populars end -->
      </section>
      <section class="home-menu">
        <h1 class="title">Меню</h1>
        <!-- modile menu start -->
        <transition name="fade-dummy" mode="out-in">
          <DummyMenu v-if="!isPageLoaded"></DummyMenu>
          <div v-else class="menu">
            <nuxt-link v-for="category in categories" :key="1" :to="{ name: 'menu', query: { c: 'category.slug' }, params: { slideIndex: 'category.index' } }" class="menu-item">
              <div class="menu-image">
                <!-- <img v-lazy="'test'"/> -->
              </div>
              <div class="menu-label">category.name</div>
            </nuxt-link>
          </div>
        </transition>
        <!-- modile menu end -->
        <!-- widescreen menu start -->
        <div class="menu-widescreen menu-widescreen__product">
          <DummyMenu v-if="!isPageLoaded"></DummyMenu>
          <div v-else class="swiper-container">
            <div class="swiper-wrapper">
              <!-- <nuxt-link v-for="category in categories" :key="1" :to="{ name: 'menu', query: { c: 'category.slug' } }" class="swiper-slide">
                <div class="menu-widescreen_slide">
                </div>
                <div class="menu-label">{{ 'category.name' }}</div>
              </nuxt-link> -->
            </div>
          </div>
          <div v-show="isPageLoaded" class="next"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
          <div v-show="isPageLoaded" class="prev swiper-button-disabled"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
        </div>
        <!-- widescreen menu end -->
      </section>
      <section class="home-call">
        <h1 class="title">Доставка по телефону</h1>
        <div class="call-to-action">
          <a href="tel:+77776960044">
            <svg class="phone-icon" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3636 0.0136364L2.72727 0C1.22727 0 0 1.22727 0 2.72727V27.2727C0 28.7727 1.22727 30 2.72727 30H16.3636C17.8636 30 19.0909 28.7727 19.0909 27.2727V2.72727C19.0909 1.22727 17.8636 0.0136364 16.3636 0.0136364ZM16.3636 24.5455H2.72727V5.45455H16.3636V24.5455Z"/></svg>
            <span class="text">+7 (777) 696 00 44</span>
            </a>
        </div>
        <a href="mailto:auradostavka@mail.ru">
          <h3 class="title">onetwo@mail.ru</h3>
        </a>
      </section>
      <section class="home_quality-control">
        <!-- <nuxt-link :to="{ name: 'quality-control' }" class="q-action">
          <h1 class="title">Контроль качества</h1>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </nuxt-link> -->
      </section>
      <section class="home-map">
        <h1 class="title">Мы на карте</h1>
        <div class="map-wrapper">
        </div>
      </section>
    </div>
    <!-- <product-card :isShow="isProductCard" @closeProductCard="closeProductCard" :product="activeProduct" :key="productCardKey"></product-card> -->
  </div>
</template>


<style lang="scss">
@mixin swiperNav {
  position: absolute;
  margin-top: -1rem;
  left: -4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.632rem;
  height: 2.632rem;
  background-color: white;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 0.9rem;
  transition: opacity 0.3s;
  cursor: pointer;
  &.swiper-button-disabled {
    opacity: 0;
  }
}
.home {
    margin-top: 3rem;
  section {
    margin-bottom: 3rem;
    h1 {
      margin-bottom: 1rem;
    }
  }
  &-events {
    margin: 0 -1rem;
    position: relative;
    .next-events, .prev-events {
      @include swiperNav();
      top: 50%;
      left: -3rem;
      @include get-media($mobile) {
        display: none;
      }
    }
    .next-events {
      right: -3rem;
      left: auto;
      svg {
        transform: rotate(180deg);
      }
    }
    .swiper {
      &-slide {
        display: grid;
        padding: 1rem;
      }
      &-pagination {
        @include swiperPagination(5px, 10%);
        @include get-media($laptop, $desktop) {
          display: none;
        }
      }
    }
    .event-image {
      border-radius: $border-radius;
      box-shadow: $box-shadow;
    }
    .dummy {
      &-swiper {
        margin: 1rem;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
      }
      &-image {
        width: 48.3%;
        padding-top: 36.225%;
        border-radius: $border-radius;
        @include bgLoadingAnimation;
        @include get-media($mobile) {
          width: 100%;
          padding-top: 75%;
        }
        &__second {
          @include get-media($mobile) {
            display: none;
          }
        }
      }
    }
  }
  .call {
    &-to-action {
      margin: 1.5rem 0;
      .phone-icon {
        width: 1.1rem;
      }
      .text {
        font-size: 150%;
        margin-left: 1rem;
      }
    }
  }
  &-map {
    margin-bottom: 0 !important;
    @include get-media($laptop, $desktop) {
      padding-bottom: 3rem;
    }
    .map {
      &-wrapper {
        margin: 0 -1rem;
      }
    }
  }
  &_quality-control {
    position: relative;
    margin: 0 -1rem;
    padding: 0.85rem;
    background-color: $aura-green;
    color: white;
    h1 {
      margin-bottom: 0 !important;
    }
    svg {
      fill: white;
    }
    .q-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @include get-media($laptop, $desktop) {
      border-radius: $border-radius;
    }
  }
  .menu {
    &-widescreen {
      position: relative;
      display: flex;
      align-items: center;
      @include get-media($mobile) {
        display: none;
      }
      &_slide {
        border-radius: $border-radius;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2);
        display: inline-flex;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        align-items: flex-start;
        .vue-load-image {
          display: inline-flex;
          align-items: flex-start;
        }
      }
      .next, .prev, .next-popular, .prev-popular {
        @include swiperNav();
      }
      .next, .next-popular {
        right: -4rem;
        left: auto;
        svg {
          transform: rotate(180deg);
        }
      }
      &__popular, &__product {
        .menu {
          @include get-media($laptop, $desktop) {
            display: flex !important;
          }
        }
        .swiper-container {
          width: 100% !important
        }
      }
    }
  }
  &-popular, &-menu {
    .menu {
      @include get-media($laptop, $desktop) {
        display: none;
      }
    }
  }
}
</style>