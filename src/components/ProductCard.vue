<template>
  <div style="height: 220px; width: 230px">
    <div
      ref="carouselContainer"
      @mousedown="startDrag"
      @mousemove="handleDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      style="cursor: grab"
    >
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        arrows
        control-color="teal"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1">
          <router-link to="/productPage"
            ><img
              src="photo/philips1.png"
              alt="Slide 1"
              style="width: 100%; height: 100%"
          /></router-link>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <router-link to="/productPage"
            ><img
              src="photo/philips2.png"
              alt="Slide 2"
              style="width: 100%; height: 100%"
          /></router-link>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <router-link to="/productPage"
            ><img
              src="photo/philips3.png"
              alt="Slide 3"
              style="width: 100%; height: 100%"
          /></router-link>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);
    const carouselContainer = ref(null);
    let isDragging = false;
    let startX = 0;
    let deltaX = 0;

    const startDrag = (event) => {
      isDragging = true;
      startX = event.clientX;
      deltaX = 0;
    };

    const handleDrag = (event) => {
      if (!isDragging) return;

      deltaX = event.clientX - startX;
    };

    const stopDrag = () => {
      if (!isDragging) return;

      isDragging = false;

      const sensitivity = 50; // Ayarlayabilirsiniz
      if (deltaX > sensitivity) {
        // Sürükleme sağa doğru
        slide.value -= 1;
      } else if (deltaX < -sensitivity) {
        // Sürükleme sola doğru
        slide.value += 1;
      }
    };

    return {
      slide,
      autoplay,
      startDrag,
      handleDrag,
      stopDrag,
    };
  },
};
</script>
