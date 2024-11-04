<script lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteStore } from 'src/stores/routeStore';
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const { route, panel } = storeToRefs(useRouteStore());

    return {
      leftDrawerOpen,
      route,
      panel,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-ma-md bg-white rounded-borders shadow-10">
      <q-tabs v-model="route" align="justify">
        <q-route-tab
          to="in"
          name="in"
          icon="arrow_downward"
          label="in"
          class="text-positive"
        />
        <q-route-tab
          to="out"
          name="out"
          icon="arrow_upward"
          label="out"
          class="text-negative"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
