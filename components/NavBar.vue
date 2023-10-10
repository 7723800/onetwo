<script setup lang="ts">
// import { mapState } from 'vuex';
const route = useRoute()

const revealMenu = (event: any) => {
  const panel = document.querySelector('.subitem-list__menu');
  // if (panel?.style.maxHeight) {
  //     panel.style.maxHeight = null
  //     panel.parentElement.querySelector('.item-label').classList.remove('is-reveal')
  // } else {
  //     panel?.style.maxHeight = panel.scrollHeight + "px";
  //     panel?.parentElement.querySelector('.item-label').classList.add('is-reveal')
  // }
}
const setNavHeight = () => {
  const navNode = document.querySelector('.nav');
  // navNode?.style.maxHeight = `${window.innerHeight - 120}px`;
}
const toRouteHandler = (path: string) => {
  // if (route.name == path) $emit('toggleMobileMenu')
}






// export default {
//   beforeMount() {
//     // this.setNavHeight()
//   },
//   mounted() {
//     // window.addEventListener('resize', (e) => {
//     //   this.setNavHeight()
//     // });
//   },
//   methods: {
//     revealMenu(e) {
//       const panel = document.querySelector('.subitem-list__menu');
//       if (panel.style.maxHeight) {
//           panel.style.maxHeight = null
//           panel.parentElement.querySelector('.item-label').classList.remove('is-reveal')
//       } else {
//           panel.style.maxHeight = panel.scrollHeight + "px";
//           panel.parentElement.querySelector('.item-label').classList.add('is-reveal')
//       }
//     },
//     setNavHeight() {
//       const navNode = document.querySelector('.nav');
//       navNode.style.maxHeight = `${window.innerHeight - 120}px`;
//     },
//     toRouteHandler(path) {
//       if (this.$route.name === path) this.$emit('toggleMobileMenu')
//     }
//   },
//   computed: {
//     // ...mapState(['categories']),
//   }
// }
</script>

<template>
  <nav class="nav">
    <ul class="sidebar-list">
      <li @click.self="revealMenu" class="sidebar-item">
        <div class="item-label item-label__accordion">
          <div class="item-icon_wrap">
            <svg class="item-icon" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7H6V0H4V7H2V0H0V7C0 9.12 1.66 10.84 3.75 10.97V20H6.25V10.97C8.34 10.84 10 9.12 10 7V0H8V7ZM13 4V12H15.5V20H18V0C15.24 0 13 2.24 13 4Z"/>
            </svg>
          </div>
          <span class="item-text">Наше меню</span>
        </div>
        <ul class="subitem-list subitem-list__menu">
          <!-- <li v-for="category in categories" :key="category.id" @click="toRouteHandler('menu')">
            <nuxt-link :to="{ name: 'menu', query: { c: category.slug } }">{{ category.name }}</nuxt-link>
          </li> -->
        </ul>
      </li>
      <li class="sidebar-item" @click="toRouteHandler('index')">
        <NuxtLink :to="{ name: 'index' }" class="item-label">
          <div class="item-icon_wrap">
            <svg class="item-icon" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"/>
            </svg>
          </div>
          <span class="item-text">Главная</span>
        </NuxtLink>
      </li>
      <li class="sidebar-item" @click="toRouteHandler('vacancies')">
        <!-- <NuxtLink :to="{ name: 'vacancies' }" class="item-label">
          <div class="item-icon_wrap">
            <svg class="item-icon item-icon__vacancy" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.61538 5.38462H5.38461V2.15385H3.23077V5.38462H0V7.53846H3.23077V10.7692H5.38461V7.53846H8.61538V5.38462ZM19.3846 6.46154C21.1723 6.46154 22.6046 5.01846 22.6046 3.23077C22.6046 1.44308 21.1723 0 19.3846 0C19.04 0 18.7062 0.053846 18.4046 0.150769C19.0185 1.02308 19.3738 2.07846 19.3738 3.23077C19.3738 4.38308 19.0077 5.42769 18.4046 6.31077C18.7062 6.40769 19.04 6.46154 19.3846 6.46154ZM14 6.46154C15.7877 6.46154 17.22 5.01846 17.22 3.23077C17.22 1.44308 15.7877 0 14 0C12.2123 0 10.7692 1.44308 10.7692 3.23077C10.7692 5.01846 12.2123 6.46154 14 6.46154ZM21.1292 8.78769C22.0231 9.57385 22.6154 10.5754 22.6154 11.8462V14H25.8462V11.8462C25.8462 10.1877 23.2938 9.16462 21.1292 8.78769ZM14 8.61539C11.8462 8.61539 7.53846 9.69231 7.53846 11.8462V14H20.4615V11.8462C20.4615 9.69231 16.1538 8.61539 14 8.61539Z"/>
            </svg>

          </div>
          <span class="item-text">Вакансии</span>
        </NuxtLink> -->
      </li>
      <li class="sidebar-item" @click="toRouteHandler('contacts')">
        <!-- <NuxtLink :to="{ name: 'contacts' }" class="item-label">
          <div class="item-icon_wrap">
            <svg class="item-icon item-icon__pin" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0C2.90643 0 0 2.817 0 6.3C0 11.025 6.5 18 6.5 18C6.5 18 13 11.025 13 6.3C13 2.817 10.0936 0 6.5 0ZM6.5 8.55C5.21857 8.55 4.17857 7.542 4.17857 6.3C4.17857 5.058 5.21857 4.05 6.5 4.05C7.78143 4.05 8.82143 5.058 8.82143 6.3C8.82143 7.542 7.78143 8.55 6.5 8.55Z"/>
            </svg>
          </div>
          <span class="item-text">Контакты</span>
        </NuxtLink> -->
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 60px;
}

.fade-left-enter-active, .fade-left-leave-active {
  transition: all .5s ease;
}
.fade-left-enter, .fade-left-leave-to {
  transform: translateX(-15px);
  opacity: 0;
}
</style>

