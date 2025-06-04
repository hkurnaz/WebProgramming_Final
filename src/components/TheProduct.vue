<template>
  <div
    style="
      background-color: #f8f8f8;
      display: flex;
      height: 70px;
      font-size: 15px;
    "
  >
    <div style="margin-top: 20px; display: flex; margin-left: 250px">
      <div class="color-change">Pasaj</div>
      <div style="color: #ffd917; font-weight: bold">></div>
      <div class="color-change">Elektrikli Ev Aletleri</div>
      <div style="color: #ffd917; font-weight: bold">></div>
      <div class="color-change">Süpürgeler</div>
      <div style="color: #ffd917; font-weight: bold">></div>
      <div class="color-change">Toz Torbasız Süpürgeler</div>
    </div>
  </div>
  <v-container style="display: flex; justify-content: center">
    <v-col style="width: 500px; height: 500px; margin-right: 100px">
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
          :autoplay="autoplay"
          arrows
          control-color="teal"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          style="height: 500px"
        >
          <q-carousel-slide :name="1">
            <img src="photo/philips1.png" alt="Slide 1" />
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <img src="photo/philips2.png" alt="Slide 2" />
          </q-carousel-slide>
          <q-carousel-slide :name="3">
            <img src="photo/philips3.png" alt="Slide 3" />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </v-col>
    <v-col>
      <div style="display: grid">
        <div
          style="
            font-size: 37px;
            color: #253342;
            font-weight: bold;
            width: 610px;
            margin-top: 50px;
          "
        >
          Philips XB7150/07 Marathon Daily 900W Toz Torbasız Elektrikli Süpürge
        </div>
        <div style="display: flex">
          <img src="photo/star.png" />
          <div style="margin-top: 10px">5.0</div>
        </div>
      </div>
      <div style="border: 1px solid grey; border-radius: 10px; width: 250px">
        <div
          style="
            font-size: 13px;
            color: grey;
            font-weight: bold;
            margin-top: 5px;
            margin-left: 10px;
          "
        >
          RENK
        </div>
        <div><img src="photo/siyah.png" /></div>
      </div>
      <div
        style="
          border: 1px solid #2855ac;
          background-color: #eff5ff;
          width: 580px;
          height: 140px;
          border-radius: 10px;
          margin-top: 15px;
        "
      >
        <div style="display: flex">
          <div
            style="background-color: #2855ac; color: white; border-radius: 5px"
          >
            Avantajlı Teklif
          </div>
          <div
            style="
              margin-left: 400px;
              font-size: 20px;
              color: #2855ac;
              font-weight: bold;
            "
          >
            7179TL
          </div>
        </div>
        <div><img src="photo/magaza0.png" /></div>
        <div style="color: grey; margin-left: 430px; margin-top: -10px">
          3 İş Gününde Kargoda
        </div>
      </div>
      <div
        style="
          display: flex;
          background-color: #009ed8;
          border-radius: 10px;
          width: 580px;
          height: 60px;
          margin-top: 15px;
        "
      >
        <v-col style="color: white; margin-left: 5px"
          >482 TL' den başlayan taksitlerle Alışveriş Kredisinden faydalanmak
          ister misin ?</v-col
        >
        <v-col
          ><q-btn
            block
            style="
              background: white;
              color: #288fce;
              border-radius: 30px;
              margin-top: 10px;
              margin-right: 1px;
            "
            label="Bilgi Al"
          ></q-btn
        ></v-col>
      </div>
      <div>
        <router-link to="/doluSepet"
          ><q-btn
            block
            style="
              background: #ffd917;
              color: black;
              border-radius: 30px;
              margin-top: 15px;
              margin-right: 1px;
              width: 580px;
            "
            label="Sepete Ekle"
          ></q-btn
        ></router-link>
      </div>
      <div style="margin-top: 50px"><img src="photo/kargoi.png" /></div>
    </v-col>
  </v-container>
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

<style>
.color-change:hover {
  color: #ffc900;
  transition: color 0.3s ease;
}
</style>
