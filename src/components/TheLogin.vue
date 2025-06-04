<template>
  <div
    style="background-color: #e9eaea; justify-content: center; height: 100vh"
    align="middle"
  >
    <router-link to="/home"
      ><div style="padding-top: 20px">
        <img src="photo/icon.png" style="width: 50px; height: 50px" /></div
    ></router-link>

    <div
      style="
        background-color: white;
        border-radius: 20px;
        height: 385px;
        width: 640px;
      "
    >
      <div>
        <div
          style="
            display: flex;
            margin-top: 20px;
            padding-top: 20px;
            justify-content: center;
          "
        >
          <div><img src="photo/login.png" /></div>
          <div style="font-size: 20px; font-weight: bold">Hızlı</div>
          <div style="font-size: 20px">Giriş</div>
        </div>
        <div
          style="
            background-color: #f1f4f6;
            border-radius: 20px;
            width: 500px;
            height: 55px;
          "
        >
          <div
            style="
              padding-top: 5px;
              border-radius: 10px;
              background-color: white;
              width: 300px;
            "
          >
            <img src="photo/@symbol.png" />
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="E-posta"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 500px;
              margin-top: 10px;
            "
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Hızlı Giriş Şifreniz"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 500px;
              margin-top: 10px;
            "
          />
        </div>

        <div
          style="display: flex; justify-content: center; margin-left: -418px"
        >
          <div>
            <q-checkbox v-model="val" />
          </div>
          <div style="margin-top: 10px">Beni Hatırla</div>
        </div>
        <div>
          <q-btn
            block
            style="
              background: #2855ac;
              color: white;
              border-radius: 20px;
              width: 500px;
              height: 45px;
              margin-top: 50px;
            "
            label="Giriş Yap"
          ></q-btn>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/register"
        ><q-btn
          block
          style="
            background: white;
            color: #2855ac;
            border-radius: 20px;
            width: 450px;
            height: 45px;
            margin-top: 30px;
            border: 1px solid #2855ac;
            font-weight: bold;
          "
          label="Yeni Hesap Oluştur"
        ></q-btn
      ></router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const val = ref(false);
</script>
