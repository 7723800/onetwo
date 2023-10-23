<script setup lang="ts">
import Swiper from 'swiper';
import ProductCard from "#components"
import { useMenuStore } from "@/stores/menu"
import { storeToRefs } from 'pinia'
const route = useRoute()
const isProductCard = ref<boolean>(false)
const activeProduct = ref<object>({})
const productCardKey = ref<number>(0)
const anchors = reactive<Array<string>>([])
const currentIndex = ref<number>(0)
const slideToIndex = ref<string>('')
const isSlideTo = ref<boolean>(false)
const isPageLoaded = ref<boolean>(false)
const menuStore = useMenuStore()
const { categories } = storeToRefs(menuStore)

// const store = useMenuStore()

// console.log(menu);

const wideImage = (id: string) => {
  // const [productImage] = $refs[`product${id}`]
  // productImage.classList.toggle('product-image__wide');
}

const showProductCard = (product: any) => { //FIXME: Добавить тип параметра
  // productCardKey.value++
  // this.$nextTick(() => {
  //   this.activeProduct = product
  //   this.isProductCard = true
  // });
}

const closeProductCard = (id: string ) => {
  // isProductCard.value = false;
  if (id) {
    // const [productImage] = this.$refs[`product${id}`]
    // if (productImage) productImage.classList.remove('product-image__wide');
  }
}

// const totalInBasket = computed({
//     get() {
//         return 0
//     },
//     set(newValue) {
        
//     }
// })

onBeforeMount(() => {
  // slideToIndex.value = route.query?.c
})
onMounted(() => {
  // isPageLoaded.value = true
})

// export default {
//   components: {
//     'product-card': () => import('~/components/ProductCard.vue'),
//     'basket-modal' : () => import('~/components/Basket.vue'),
//     'dummy-products': () => import('~/components/DummyProducts.vue'),
//   },
//   data() {
//     return {
//       isProductCard: false,
//       activeProduct: {},
//       productCardKey: 0,
//       anchors: [],
//       currentIndex: 0,
//       slideToIndex: '',
//       isSlideTo: false,
//       isPageLoaded: false,
//     }
//   },
//   created() {
//     this.slideToIndex = this.$route.query.c
//   },
//   beforeMount() {
//     smoothscroll.polyfill();
//   },
//   mounted() {
//     this.isPageLoaded = true
//      this.$nextTick(() => {
//       this.navSwiper.init()
//       this.setActiveMenu()
//       setTimeout(() => {
//         this.goToAnchor(this.$route.query.c)
//         this.anchorsForScrollHandler()
//       }, 500)
//     });
//     window.addEventListener('scroll', this.scrollHandler);
//   },
//   destroyed() {
//     window.removeEventListener('scroll', this.scrollHandler);
//   },
//   methods: {
//     setActiveCategory(query, index) {
//       this.slideToIndex = query
//       this.isSlideTo = false
//       this.goToAnchor(query)
//       this.setActiveSlide()
//     },
//     setActiveMenu() {
//       const activeCategory = this.categories.find(item => item.slug == this.$route.query.c);
//       activeCategory ? this.navSwiper.slideTo(activeCategory.index) : this.navSwiper.slideTo(0)
//       this.setActiveSlide()
//     },
//     setActiveSlide() {
//       const nav = document.querySelector('.catalog-nav')
//       const slides = nav.querySelectorAll('.swiper-slide')
//       for (const slide of slides) {
//         slide.classList.contains('swiper-slide-active') ? slide.classList.add('active-menu') : slide.classList.remove('active-menu');
//       }
//     },
//     showProductCard(product) {
//       this.productCardKey++
//       this.$nextTick(() => {
//         this.activeProduct = product
//         this.isProductCard = true
//       });
//     },
//     closeProductCard({ id }) {
//       this.isProductCard = false;
//       if (id) {
//         const [productImage] = this.$refs[`product${id}`]
//         if (productImage) productImage.classList.remove('product-image__wide');
//       }
//     },
//     goToAnchor(id) {
//       try {
//         const elm = document.getElementById(id)
//         if (!elm) throw new Error()
//         window.scrollTo({ top: elm.offsetTop - this.anchorOffset + 4 , behavior: 'smooth' }); // + 40
//       } catch (e) {
//         console.error(e);
//       }
//     },
//     wideImage(id) {
//       const [productImage] = this.$refs[`product${id}`]
//       productImage.classList.toggle('product-image__wide');
//     },
//     anchorsForScrollHandler() {
//       let anchors = []
//       try {
//         const anchorElms = document.querySelectorAll('.product-wrapper');
//         if (!anchorElms.length) throw new Error();
//         anchorElms.forEach((elm, index) => {
//           const anchor = { index, offset: elm.offsetTop + elm.scrollHeight, slug: elm.id }
//           anchors.push(anchor)
//         })
//         this.anchors = anchors
//       }
//       catch (e) {
//         console.error(e)
//       }
//     },
//     scrollHandler() {
//       if (!this.anchors.length) return
//       const pageYOffset = window.pageYOffset + this.anchorOffset
//       const item = this.anchors.find(elm => elm.offset >= pageYOffset)
//       if (item) {
//         if (this.slideToIndex == item.slug) this.isSlideTo = true
//         if (this.currentIndex == item.index || !this.isSlideTo) return
//         if (this.$route.query.c != item.slug) this.$router.replace(`${this.$route.path}?c=${item.slug}`)
//         this.currentIndex = item.index
//         this.navSwiper.slideTo(item.index)
//         this.anchorsForScrollHandler()
//         this.setActiveSlide()
//       }
//     }
//   },
//   computed: {
//     ...mapState(['categories', 'menu', 'basket']),
//     navSwiper() {
//       return new Swiper('.catalog-nav > .swiper-container', {
//           init: false,
//           slidesPerView: 'auto',
//           centeredSlides: true,
//           slideToClickedSlide: true,
//           centerInsufficientSlides: true,
//           slidesPerViewFit : true,
//           navigation: {
//             nextEl: '.next',
//             prevEl: '.prev',
//           },
//           breakpoints: {
//             1281: {
//               spaceBetween: 30,
//               shortSwipes: false
//             },
//             1025: {
//               spaceBetween: 30,
//             },
//             320: {
//               spaceBetween: 8,
//             }
//           }
//       })
//     },
//     totalInBasket() {
//       return this.basket.reduce((total, product) => {
//         const price = product.extra_prices ? product.extra_prices.find(key => key.isSelected).value : product.price;
// 				return total + (price * product.quantity);
// 			}, 0)
//     },
//     anchorOffset() {
//       const headerHeight = document.querySelector('.header').scrollHeight;
//       const navHeight = document.querySelector('.catalog-nav').scrollHeight;
//       return headerHeight + navHeight
//     }
//   },
// }
</script>

<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog-inner">
        <!-- <div class="catalog-nav"> -->
          <!-- <div class="next"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div>
          <div class="prev"><svg viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.78788L8.48329 0L0 10L8.48329 20L10 18.2121L3.03342 10L10 1.78788Z"/></svg></div> -->
          <!-- <div class="swiper-container"> -->
            <!-- <div class="swiper-wrapper">
              <div v-for="category in categories" :key="category.id" class="swiper-slide" :class="{'active-menu': category.index === 0, 'dummy-category': !isPageLoaded }" @click="setActiveCategory(category.slug, category.index)"><span>{{ category.name }}</span></div>
            </div> -->
          <!-- </div> -->
        <!-- </div> -->
          <div class="catalog-content">
            <!-- menu start -->
            <div class="catalog-content__menu">
              <div v-for="category in categories" :key="category.id" :id="category.slug" class="product-wrapper">
                <h3 class="title">{{ category.name }}</h3>
                <div v-for="product in category.products" :key="product.id" class="product">
                  <div :ref="`product${product.id}`" @click="wideImage(product.id)" class="product-image">
                    <img :src="product.imageUrl"/>
                  </div>
                  <div class="product-content">
                    <div @click="wideImage(product.id)" class="product-name">{{ product.name }}</div>
                    <div @click="wideImage(product.id)" v-html="product.description" class="product-description">
                    </div>
                    <div class="product-action">
                      <div class="product-price-wrap">
                        <!-- <div v-if="product.oldPrice" class="product-old-price">{{ product.extra_prices ? 'от ' : '' }}{{ product.oldPrice.toLocaleString('ru-RU') }} ₸</div> -->
                        <div class="product-price">{{ product.price.toLocaleString('ru-RU') }} ₸</div>
                      </div>
                      <!-- <button @click="showProductCard(product)" class="product-btn" :class="{ 'in-basket': product.quantity }">{{ product.quantity ? 'Изменить' : 'Добавить' }}</button> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- menu end -->
            <!-- <div class="desktop-sidebar">
              <div class="desktop-sidebar_content">
                <div class="top-line">Мой заказ</div>
                <BasketModal :isShow="true"></BasketModal>
              </div>
            </div>

            <div class="catalog-footer">
              <NuxtLink v-if="totalInBasket" :to="{ name: 'cart' }" class="footer-filled">
                <div class="title">Оформить заказ</div>
                <div class="total">{{ totalInBasket.toLocaleString('ru-RU')}} ₸</div>
              </NuxtLink>
              <div v-else class="footer-empty">Ваша корзина пуста</div>
            </div> -->
          </div>
        <!-- <ProductCard :isShow="isProductCard" @closeProductCard="closeProductCard" :product="activeProduct" :key="productCardKey"></ProductCard> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$nav-height: 36px;
.catalog {
  padding-bottom: $header-height;
  &-nav {
    height: $nav-height;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 -1rem;
    background: white;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 1;
    @include get-media($laptop) {
      width: calc(#{$laptop-width} - 2rem);
    }
    @include get-media($desktop) {
      width: calc(#{$desktop-width} - 5rem);
    }
    @include get-media($laptop, $desktop) {
      box-shadow: none;
      margin: 0;
      border: 1px solid $grey;
      border-width: 0 1px 1px 1px;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      overflow: hidden;
    }
    .swiper {
      &-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      &-wrapper {
          display: inline-flex;
          height: 100%;
      }
      &-slide {
        display: flex;
        // justify-content: center;
        align-items: center;
        height: 100%;
        max-width: 150px;
        cursor: pointer;
        white-space: nowrap;
        span {
          width: 100%;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &.active-menu {
          position: relative;
          transition: all .5s;
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 60%;
            background: $aura-green;
            height: 2px;
            margin: auto;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
          }
        }
        &.dummy-category {
          position: relative;
          color: transparent;
          &::after {
            content: "";
            position: absolute !important;
            height: 55%;
            width: 80%;
            @include bgLoadingAnimation;
          }
          &::before {
            content: none;
          }
        }
      }
    }
    .prev, .next {
      position: absolute;
      height: 100%;
      width: 2rem;
      text-align: center;
      background: white;
      z-index: 10;
      outline-color: transparent;
      transition: opacity 0.3s;
      cursor: pointer;
      svg {
        width: 0.675rem;
        fill: $aura-green;
      }
      &.swiper-button-disabled {
        opacity: 0;
      }
    }
    .next  {
      right: 0;
      transform: rotate(180deg);
      &::before {
        content: "";
        position: absolute;
        z-index: 2;
        pointer-events: none;
        top: 0;
        height: 100%;
        width: 50px;
        background-image: linear-gradient(270deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9) 25px,#fff);
        left: 22px;
      }
    }
    .prev  {
      left: 0;
      &::before {
        content: "";
        position: absolute;
        z-index: 2;
        pointer-events: none;
        top: 0;
        height: 100%;
        width: 40px;
        background-image: linear-gradient(270deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9) 25px,#fff);
        left: 22px;
      }
    }
  }
  &-content {
    // padding-top: $nav-height;
    margin-left: -1rem;
    scroll-behavior: smooth;
    @include get-media($laptop, $desktop) {
      display: flex;
      margin-left: 0;
      flex-wrap: wrap;
      position: relative;
    }
    &__menu {
      @include get-media($laptop, $desktop) {
        width: 68%;
      }
    }
    .desktop-sidebar {
      position: sticky;
        top: calc(#{$header-height-widescreen} + #{$nav-height} + 1rem);
        width: 310px;
        border: 1px solid $grey;
        border-radius: $border-radius;
        overflow: hidden;
        margin: 1rem 0;
        height: 100%;
      @include get-media($mobile) {
        display: none;
      }
      &_content {
        padding: 1rem;
        overflow: hidden;
        .top-line {
          font-size: 1.25rem;
          text-align: center;
          padding-bottom: 0.5rem;
          position: relative;
          color: white;
          &::before {
            content: '';
            position: absolute;
            top: -1rem;
            background: $aura-green;
            left: -1rem;
            right: -1rem;
            bottom: 0;
            z-index: -1;
          }
        }
        .product {
          margin: 0;
          background-color: none;
          width: 100%;
          border-width: 0 0 1px 0;
          border-radius: 0;
          background-color: #f9f9f9;
          &-image {
            display: none;
          }
        }
        .sidebar-header {
          display: none;
        }
      }
    }
  }
  &-footer {
    position: fixed;
    height: $header-height;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: $aura-green;
    color: white;
    border-top: 1px solid;
    border-color: rgba($grey, 0.5);
    @include get-media($laptop, $desktop) {
      display: none;
    }
    .footer-filled {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 100%;
    }
    .footer-empty {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

