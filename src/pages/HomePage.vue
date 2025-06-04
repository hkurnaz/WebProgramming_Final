<template>
  <div style="margin-top: -20px"><HomeCarousel /></div>

  <div
    style="
      font-size: 30px;
      font-weight: bold;
      margin-top: 500px;
      margin-left: 300px;
    "
  >
    En İyi Teklifler
  </div>
  <div style="margin-top: 20px; margin-left: 300px"><Card /></div>
  <div style="margin-top: 400px; margin-bottom: 400px"><Kampanyalar /></div>
</template>

<script setup>
import HomeCarousel from 'components/HomeCarousel.vue';
import Card from 'components/ProductCard.vue';
import Kampanyalar from 'components/TheKampanyalar.vue';
</script>
