import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', {
  state: () => ({
    route: 'in',
    panel: 'summary',
  }),
});
