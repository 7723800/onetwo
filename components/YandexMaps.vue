<script setup lang="ts">
import { onMounted } from 'vue';

const initMap = () => {
  const mapContainer = document.getElementById('map');
  // Ymaps
  //     .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  //     .then((maps: any) => {
  //       const map = new maps.Map(mapContainer, {
  //         center: [ 51.137999, 71.434129 ],
  //         zoom: 17
  //       },{
  //         searchControlProvider: 'yandex#search'
  //     });
  //     map.behaviors.disable('drag');
  //     let placemark = new maps.Placemark([ 51.137999, 71.433929 ], null, {
  //         iconLayout: 'default#image',
  //         iconImageHref: 'images/aura-logo.svg',
  //         iconImageSize: [40, 40],
  //         iconImageOffset: [-10, -45]
  //     });
  //     map.geoObjects
  //       .add(placemark)
  //   })
  //   .catch((error: any) => console.log('Failed to load Yandex Maps', error));
}

onMounted(() => {
  initMap()
})

</script>

<template>
  <div id="map"></div>
</template>

<style lang="scss">
#map {
  border: 1px solid $grey;
  border-width: 1px 0;
  width: 100%;
  height: 70vh;
  @include get-media($laptop, $desktop) {
    height: 40vh;
    border-width: 1px;
    border-radius: $border-radius;
    overflow: hidden;
  }
}
</style>

