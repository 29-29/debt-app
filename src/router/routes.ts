import { RouteRecordRaw } from 'vue-router';

import MainLayout from 'layouts/MainLayout.vue';
import InPage from 'pages/InPage.vue';
import OutPage from 'pages/OutPage.vue';

import NewInPage from 'src/pages/NewInPage.vue';
import NewOutPage from 'src/pages/NewOutPage.vue';

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
  {
    path: '/in/new',
    component: NewInPage,
  },
  {
    path: '/out/new',
    component: NewOutPage,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
