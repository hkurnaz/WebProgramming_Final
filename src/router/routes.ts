import { RouteRecordRaw } from 'vue-router';
import MainLayout2 from 'src/layouts/MainLayout2.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'arama', component: () => import('components/SearchBar.vue') },
      { path: 'logincomp', component: () => import('components/TheLogin.vue') },
      {
        path: 'registercomp',
        component: () => import('components/TheRegister.vue'),
      },

      { path: 'card', component: () => import('components/ProductCard.vue') },
      { path: 'product', component: () => import('components/TheProduct.vue') },
      {
        path: 'sellers',
        component: () => import('components/OtherSellers.vue'),
      },
      { path: 'header', component: () => import('components/TheHeader.vue') },
      { path: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'bosSepet', component: () => import('pages/SepetBos.vue') },
      { path: 'doluSepet', component: () => import('pages/SepetDolu.vue') },
      { path: 'productPage', component: () => import('pages/ProductPage.vue') },

      {
        path: 'carousel',
        component: () => import('components/HomeCarousel.vue'),
      },
      { path: 'comp4', component: () => import('components/TheComp4.vue') },
      {
        path: 'psepet',
        component: () => import('components/ProductSepet.vue'),
      },
      { path: 'comp5', component: () => import('components/TheComp5.vue') },
    ],
  },

  {
    path: '/',
    component: MainLayout2,
    children: [
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'register',
        component: () => import('pages/RegisterPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
