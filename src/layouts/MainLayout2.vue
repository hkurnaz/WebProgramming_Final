<template>
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
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
</script>
