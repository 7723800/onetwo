<script setup lang="ts">
import { NavBar } from "#components"
//   import { mapState, mapActions } from 'vuex';
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
const isMainModal = ref<boolean>(false)
const isBasketModal = ref<boolean>(false)
const isHeaderShadow = ref<boolean>(true)
const isDropdown = ref<boolean>(false)
const route = useRoute()
const headerShadow = (routeName: string) => {
    routeName == 'menu' ? isHeaderShadow.value = false : isHeaderShadow.value = true;
}
const closeDropdown = () => {
    const main = document.querySelector('main');
    main?.addEventListener('click', (event) => {
        isDropdown.value = false
    });
}
const toggleMobileMenu = () => {
    isMainModal.value = !isMainModal.value
}
const toggleMobileBasket = () => {
    isBasketModal.value = !isBasketModal.value
}
const increaseAmount = (id: string, amount: number) => {
    const qty = amount + 1
    // updateProduct({ id, qty })
}
const decreaseAmount = (id: string, amount: number) => {
    const qty = amount - 1
    if (!amount) {
        return
    }
    // updateProduct({ id, qty })
}
const totalAmount = computed({
    get() {
        return 0
    },
    set(newValue) {
        
    }
})
const totalPrice = computed({
    get() {
        return 0
    },
    set(newValue) {
        
    }
})

console.log(route.name);

onMounted(() => {
    // headerShadow(route.name ? route.name : "")
    closeDropdown()
})
  
//   export default {
//     mounted() {
//       this.headerShadow(this.$route.name)
//       this.closeDropdown()
//     },
//     methods: {
//     //   ...mapActions({
//     //     deleteProduct: 'DELETE_PRODUCT',
//     //     updateProduct: 'UPDATE_PRODUCT',
//     //     clearBasket: 'CLEAR_BASKET',
//     //   }),
//     watch: {
//       '$route': function (newValue) {
//         this.headerShadow(newValue.name)
//         this.isMainModal = false;
//         this.isBasketModal = false;
//       },
//       isMainModal(newValue) {
//         const modal = document.querySelector('.nav')
//         // newValue ? disableBodyScroll(modal) : enableBodyScroll(modal)
//       }
//     }
//   }
  </script>

  <template>
    <header class="header widescreen" :class="{ 'is-shadow': isHeaderShadow }">
      <div class="container">
        <div class="header-inner">
          <!-- widescreen logo -->
           <NuxtLink :to="{ name: 'index' }" class="logo">
              <img src="/images/aura-header-logo.svg">
           </NuxtLink>
          <!-- widescreen logo -->
  
          <!-- widescreen menu -->
          <nav class="desktop-nav">
            <ul class="desktop-list">
              <li>
                <NuxtLink :to="{ name: 'index' }" class="desktop-item">Главная</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink :to="{ name: 'menu', query: { c: this.menu[0].slug } }" class="desktop-item">Меню</NuxtLink>
              </li> -->
            <!-- <li>
                <NuxtLink :to="{ name: 'vacancies' }" class="desktop-item">Вакансии</NuxtLink>
            </li> -->
            <!-- <li>
                <NuxtLink :to="{ name: 'contacts' }" class="desktop-item">Контакты</NuxtLink>
              </li> -->
            </ul>
          </nav>
          <!-- widescreen menu -->
  
          <div @click="toggleMobileMenu" class="site-menu">
            <svg class="hamburger" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24H20.7143V21.1111H0V24ZM0 13.3333H15.1905V10.5556H0V13.3333ZM0 0V2.66667H29V0H0Z"/></svg>
          </div>
          <div class="location">
            <!-- <svg class="time" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> -->
            <span>Астана</span>
          </div>
          <div @click="toggleMobileBasket" class="cart">
            <svg class="basket" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0387 11.0259L17.5434 1.00272C17.2616 0.574902 16.787 0.360992 16.3125 0.360992C15.838 0.360992 15.3634 0.574902 15.0816 1.018L8.58631 11.0259H1.48295C0.667329 11.0259 0 11.7135 0 12.5538C0 12.6913 0.0148295 12.8289 0.0593181 12.9664L3.82602 27.1302C4.1671 28.4137 5.30898 29.361 6.6733 29.361H25.9517C27.316 29.361 28.4579 28.4137 28.8138 27.1302L32.5805 12.9664L32.625 12.5538C32.625 11.7135 31.9577 11.0259 31.142 11.0259H24.0387ZM11.8636 11.0259L16.3125 4.30304L20.7614 11.0259H11.8636ZM16.3125 23.2493C14.6812 23.2493 13.3466 21.8742 13.3466 20.1934C13.3466 18.5127 14.6812 17.1376 16.3125 17.1376C17.9438 17.1376 19.2784 18.5127 19.2784 20.1934C19.2784 21.8742 17.9438 23.2493 16.3125 23.2493Z" fill="#373535"/></svg>
            <Transition name="scale">
                <div v-if="totalAmount" class="in-cart">{{ totalAmount }}</div>
            </Transition>
          </div>
          <!-- <NuxtLink :to="{ name: 'menu', query: { c: this.menu[0].slug } }" class="desktop-cart">
            <Transition name="scale" mode="out-in">
              <svg v-if="!basket.length" class="basket" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0387 11.0259L17.5434 1.00272C17.2616 0.574902 16.787 0.360992 16.3125 0.360992C15.838 0.360992 15.3634 0.574902 15.0816 1.018L8.58631 11.0259H1.48295C0.667329 11.0259 0 11.7135 0 12.5538C0 12.6913 0.0148295 12.8289 0.0593181 12.9664L3.82602 27.1302C4.1671 28.4137 5.30898 29.361 6.6733 29.361H25.9517C27.316 29.361 28.4579 28.4137 28.8138 27.1302L32.5805 12.9664L32.625 12.5538C32.625 11.7135 31.9577 11.0259 31.142 11.0259H24.0387ZM11.8636 11.0259L16.3125 4.30304L20.7614 11.0259H11.8636ZM16.3125 23.2493C14.6812 23.2493 13.3466 21.8742 13.3466 20.1934C13.3466 18.5127 14.6812 17.1376 16.3125 17.1376C17.9438 17.1376 19.2784 18.5127 19.2784 20.1934C19.2784 21.8742 17.9438 23.2493 16.3125 23.2493Z" fill="#373535"/></svg>
              <div v-else class="total">{{ totalInBasket.toLocaleString('ru-RU') }} ₸</div>
            </Transition>
          </NuxtLink> -->
        </div>
      </div>
      <Transition name="fade-left">
        <div v-show="isMainModal" class="mobile-sidebar mobile-sidebar_menu">
          <div class="sidebar-header">
            <svg @click="toggleMobileMenu" class="close-modal" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"/></svg>
            <div class="text">One Two</div>
          </div>
          <div class="sidebar-content">
            <div class="container">
              <div class="sidebar-container">
                <NavBar @toggleMobileMenu="isMainModal = false"></NavBar>
              </div>
            </div>
          </div>
          <div class="mobile-sidebar_footer">
            <div class="container">
              <div class="contact-us_wrapper">
                <a class="contact-us" href="tel:+77776960044">
                  <svg class="phone" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2085 16.6509C15.0647 19.5052 18.3737 22.2368 19.6818 20.9288C21.5528 19.0577 22.7075 17.4267 26.8356 20.7447C30.962 24.0609 27.7919 26.273 25.9786 28.0844C23.8857 30.1774 16.0841 28.1963 8.37268 20.4867C0.663097 12.7753 -1.31256 4.97373 0.782177 2.88079C2.59545 1.06571 4.79665 -2.10256 8.11287 2.02377C11.4309 6.1501 9.80165 7.30483 7.92703 9.17764C6.62436 10.4857 9.35419 13.7947 12.2085 16.6509Z" fill="white"/>
                  </svg>
                  <span>+7 (777) 696 00 44</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <!-- <Basket @toggleMobileBasket="toggleMobileBasket" :isShow="isBasketModal"></Basket> -->
    </header>
  </template>
  
  <style lang="scss">
  $grey-color: #999;
  .header {
    position: fixed;
    top: 0;
    height: $header-height;
    background-color: white;
    z-index: 101;
    width: 100%;
    @include get-media($laptop, $desktop) {
      height: $header-height-widescreen;
      width: 100vw;
    }
    &.widescreen {
      @include get-media($laptop, $desktop) {
        border-bottom: 1px solid $grey;
      }
      .logo {
        @include get-media($mobile) {
          display: none;
        }
        @include get-media($laptop, $desktop) {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          img {
            width: 110px;
          }
        }
      }
      .desktop {
        &-nav {
          @include get-media($mobile) {
            display: none;
          }
        }
        &-list {
          display: flex;
          align-items: center;
        }
        &-item {
          position: relative;
          margin: 0 1rem;
          height: 1.54rem;
          display: flex;
          justify-content: center;
          cursor: pointer;
          span {
            transition: all 0.3s;
            &:hover {
              color: $grey-color
            }
          }
          &::before {
            content: '';
            position: absolute;
            height: 1px;
            background-color: $aura-green;
            bottom: 0;
            width: 0;
            transition: width 0.3s linear;
          }
          &.nuxt-link-exact-active {
            &::before {
              width: 100%;
            }
          }
          .dropdown {
            position: relative;
            &-icon {
              top: 0;
              position: absolute;
              right: -1.5rem;
              fill: $grey-color;
              transition: all 0.2s linear;
              &.is-open {
                transform: rotate(-180deg)
              }
            }
            &-menu {
              top: 45px;
              left: 0;
              position: absolute;
              background-color: white;
              box-shadow: 0 0 25px 0 rgba(0,0,0,.15);
              border-radius: $border-radius;
              &::before {
                content: "";
                display: block;
                position: absolute;
                top: -10px;
                left: 20%;
                background: 0 0;
                width: 0;
                height: 0;
                border-bottom: 20px solid #fff;
                border-right: 20px solid transparent;
                border-left: 20px solid transparent;
                margin-left: -20px;
              }
              &::after {
                content: "";
                z-index: -1;
                display: block;
                width: 6px;
                height: 6px;
                position: absolute;
                top: -4px;
                left: 20%;
                margin-left: -3px;
                border-radius: 100%;
                box-shadow: 0 -2px 8px 1px rgba(0,0,0,.5);
              }
            }
            &-item {
              display: block;
              padding: 0.55rem 5rem 0.55rem 1rem;
              white-space: nowrap;
            }
            &-li {
              border-bottom: 1px solid #f1f1f1;
              &:hover {
                color: $grey-color;
              }
              &:last-child {
                border-bottom: none;
              }
            }
          }
        }
        &-cart {
          display: flex;
          border-radius: $border-radius;
          align-items: center;
          padding: 0.25rem 1rem;
          width: 160px;
          justify-content: flex-end;
          @include get-media($mobile) {
            display: none;
          }
          .total{
            box-shadow: 0 3px 7px 0 rgba(93, 155, 56, 0.3);
            padding: 0.5rem 1rem;
            background: $aura-green;
            color: white;
            border-radius: $border-radius;
            margin-left: 1rem;
          }
          .basket {
            width: 1.74rem;
          }
        }
      }
    }
    &.is-shadow {
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
      @include get-media($laptop, $desktop) {
        box-shadow: none;
      }
    }
    &-inner {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include get-media($laptop, $desktop) {
        margin-left: -0.5rem;
      }
      .site {
        &-menu {
          @include get-media($laptop, $desktop) {
            display: none;
          }
          .hamburger {
            width: 1.625rem;
          }
        }
      }
      .location {
        display: flex;
        align-items: center;
        .pin {
          width: 0.8125rem;
        }
        .time {
          margin-right: 1rem;
        }
      }
      .cart {
        position: relative;
        @include get-media($laptop, $desktop) {
          display: none;
        }
        .basket {
          width: 1.875rem;
        }
        .in-cart {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: $aura-green;
          border-radius: 50%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 75%;
        }
      }
    }
    .mobile-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $aura-green;
      z-index: 110;
      color: white;
      svg {
        fill: white;
      }
      &_content {
        padding: 1em 0;
      }
      .sidebar {
        &-header {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: $header-height;
          border-bottom: 1px solid white;
          .text {
            flex: 1;
            text-align: center;
            font-size: 1.25rem;
          }
          .close-modal {
            position: absolute;
            width: 20px;
            left: 1rem;
          }
        }
        &-container {
          display: flex;
          padding-bottom: 130px;
        }
        &-list {
          width: 100%;
        }
        &-item {
          margin: 1rem 0;
          .item {
            &-label {
              position: relative;
              display: flex;
              align-items: center;
              font-size: 1.15rem;
              &__accordion {
                @include plusIcon;
                pointer-events: none;
                &.is-reveal {
                  &::before {
                    transform: scale(0);
                  }
                }
              }
            }
            &-icon {
              width: 1.25rem;
              &__pin {
                width: 1rem;
              }
              &__vacancy{
                width: 1.6rem;
              }
              &_wrap {
                width: 1.5rem;
                margin-right: 1rem;
                text-align: center;
              }
            }
          }
          & > .subitem {
              &-list {
              margin-left: 4rem;
              li {
                padding: 0.5rem 0;
              }
              &__menu {
                max-height: 0;
                overflow: hidden;
                transition: all .3s linear;
              }
            }
          }
        }
      }
      &_footer {
        position: fixed;
        bottom: 0;
        height: $header-height;
        width: 100%;
        border-top: 1px solid white;
        background-color: $aura-green;
        .contact-us {
          display: flex;
          align-items: flex-end;
          .phone {
            width: 1.5rem;
            margin-right: 1rem;
          }
          &_wrapper {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .fade-bottom-enter-active, .fade-bottom-leave-active {
    transition: all .4s ease-in-out;
  }
  .fade-bottom-enter, .fade-bottom-leave-to {
    transform: translateY(15px);
    opacity: 0;
  }
  /* we will explain what these classes do next! */
.fade-left-enter-active,
.fade-left-leave-active {
    transition: all .2s ease-in-out;
}

.fade-left-enter-from,
.fade-left-leave-to {
    transform: translateX(-100%);
}
  </style>
  
  