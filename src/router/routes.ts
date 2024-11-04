import { RouteRecordRaw } from 'vue-router';

import MainLayout from 'layouts/MainLayout.vue';
import InPage from 'pages/InPage.vue';
import OutPage from 'pages/OutPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'in',
        name: 'in',
        component: InPage,
      },
      {
        path: 'out',
        name: 'out',
        component: OutPage,
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
