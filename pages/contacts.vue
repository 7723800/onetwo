<script setup lang="ts">
import YandexMaps from "#components"

</script>

<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts-header">
        <div @click="$router.back()" class="back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
        </div>
        <div class="title">
          <h3>Контакты</h3>
        </div>
      </div>
      <section class="contacts-inner">
        <div class="contacts-content">
          <div class="contacts-item">
            <div class="label">Режим работы</div>
            <div class="text"><img class="icon" src="/images/clock.png">с 11:00 до 00:00 (пн-вс)</div>
          </div>
          <div class="contacts-item">
            <div class="label">Номер доставки</div>
            <a href="tel:77750071161"><img class="icon" src="/images/phone.png">+7 (775) 007 1161 </a>
          </div>
          <div class="contacts-item">
            <div class="label">Номер для брони столов в ресторане</div>
            <a href="tel:77014443666"><img class="icon" src="/images/phone.png">+7 (701) 444 3666</a>
          </div>
          <div class="contacts-item">
            <div class="label">E-mail</div>
            <a href="mailto:auradostavka@mail.ru"><img class="icon" src="/images/mail.png">auradostavka@mail.ru</a>
          </div>
          <div class="contacts-item">
            <div class="label">Адрес</div>
            <div class="text"><img class="icon" src="/images/address.png">г. Нур-Султан, Арай 29а, БЦ NAK</div>
          </div>
          <div class="contacts-item">
            <div class="label">О нас</div>
            <div class="text"><img class="icon" src="/images/about.png">Новые особенности ресторана: 6 видов кухонь (итальянская, грузинская, авторская, европейская, восточная, национальная)</div>
          </div>
        </div>
      </section>
      <section class="contacts-map">
        <div class="map-wrapper">
          <YandexMaps />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  position: relative;
  padding-top: 1rem;
  &-inner {
    @include get-media($laptop, $desktop) {
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
  &-header {
    position: relative;
    @include header;
  }
  &-item {
    a {
      display: flex;
      align-items: center;
      @include get-media($laptop, $desktop) {
        justify-content: center;
      }
    }
    margin-bottom: 1.5rem;
    .label {
      margin-bottom: 0.5rem;
      font-family: 'AuraB';
    }
    .icon {
      margin-right: 0.5rem;
    }
  }
  &-content {
    margin-top: 1rem;
  }
  &-map {
    margin-top: 2rem;
    .map {
      &-wrapper {
        margin: 0 -1rem;
      }
    }
  }
}

</style>

