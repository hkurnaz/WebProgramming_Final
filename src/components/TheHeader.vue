<template>
  <div style="display: flex; justify-content: center">
    <v-container>
      <v-row style="display: flex">
        <v-col style="margin-right: 500px">
          <div>
            <q-avatar :size="'md'"><img src="photo/turkcell.png" /></q-avatar>
            <a href="/" style="text-decoration: none; color: grey"
              >turkcell.com.tr</a
            >
          </div>
        </v-col>
        <v-col style="margin-left: 200px">
          <div class="text-black">
            <v-row>
              <v-col
                ><a href="" style="text-decoration: none; color: grey"
                  >Favorilerim</a
                ></v-col
              >&nbsp;
              <v-col
                ><a href="" style="text-decoration: none; color: grey"
                  >Kampanyalar</a
                ></v-col
              >&nbsp;
              <v-col
                ><a href="" style="text-decoration: none; color: grey"
                  >Yardım</a
                ></v-col
              >&nbsp;
              <v-col
                ><a href="" style="text-decoration: none; color: grey"
                  >Neden Pasaj?</a
                ></v-col
              >&nbsp;
              <v-col
                ><a href="" style="text-decoration: none; color: grey"
                  >Pasaj Blog</a
                ></v-col
              >&nbsp;
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div style="display: flex; justify-content: center">
    <v-container>
      <v-row style="display: flex">
        <v-col style="padding-right: 40px">
          <router-link to="/home"
            ><a href="">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png?17735349480651"
                width="131"
                height="55"
              /> </a
          ></router-link>
        </v-col>
        <v-col style="margin-left: 20px; margin-top: 10px"><SearchBar /></v-col>
        <v-col><LoginButton /></v-col>
        <v-col style="margin-top: 15px"><TheSepet /></v-col>
      </v-row>
    </v-container>
  </div>

  <div style="display: flex; justify-content: center">
    <v-container>
      <v-row style="display: flex">
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Cep Telefonu Akseuarı</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Bilgisayar-Tablet</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Elektirkli Ev Aletleri</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Beyaz Eşya</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Sağlık-Kişisel Bakım</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Hobi-Oyun</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">TV-Ses Sistemleri</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Ev-Yaşam</div></v-col
        >
        <v-col style="margin: 10px; padding-right: 5px">
          <div class="color-change">Anne-Bebek-Oyuncak</div></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import SearchBar from 'components/SearchBar.vue';
import LoginButton from 'components/LoginButton.vue';
import TheSepet from 'components/TheSepet.vue';
</script>

<style>
.color-change:hover {
  color: #ffc900;
  transition: color 0.3s ease;
}
</style>
