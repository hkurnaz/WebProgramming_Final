<template>
  <router-link to="/bosSepet"
    ><q-btn
      style="
        background: #ffc900;
        color: rgb(0, 0, 0);
        height: 50px;
        width: 160px;
      "
      ><div style="margin-right: 10px">
        <img src="photo/shopping-cart.png" width="20" height="20" />
      </div>
      <div>Sepet</div>
      <div class="circle" style="margin-left: 160px">0</div></q-btn
    ></router-link
  >
</template>

<style>
.circle {
  width: 50px;
  height: 50px;
  background-color: #ed6060; /* White background for the circle */
  border-radius: 100%; /* Create a circular shape */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  border: 3px solid #ffffff; /* Red border for the circle */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #ffffff; /* Red color for the circle text */
}
</style>

<script setup>
import { ref } from 'vue';

const text = ref('');
</script>
