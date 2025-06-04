<template>
  <div>
    <div style="margin-top: 70px"><TheHeader /></div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> Web Programlama Final</q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header> Page Listesi </q-item-label>

          <ComponentLink
            v-for="link in componentLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view v-if="!bypassLayout" />
        <router-view v-else :layout="null" />
      </q-page-container>
    </q-layout>
    <div><TheFooter /></div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from 'components/TheHeader.vue';
import TheFooter from 'components/TheComp4.vue';
import { useRoute } from 'vue-router';

import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';
const leftDrawerOpen = ref(false);

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'AnaSayfa',
    caption: 'Harun Kurnaz',
    link: 'home',
  },
  {
    title: 'Sepet Boş',
    caption: 'Harun Kurnaz',
    link: '/bosSepet',
  },
  {
    title: 'Dolu Sepet',
    caption: 'Harun Kurnaz',
    link: '/doluSepet',
  },
  {
    title: 'Product',
    caption: 'Harun Kurnaz',
    link: '/productPage',
  },
  {
    title: 'Login',
    caption: 'Harun Kurnaz',
    link: '/login',
  },
  {
    title: 'Register',
    caption: 'Harun Kurnaz',
    link: '/register',
  },
];

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const bypassLayout = useRoute().meta.bypassLayout;
</script>
