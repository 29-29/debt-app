<script lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteStore } from 'src/stores/routeStore';
import { Panel } from './models';

export default {
  setup() {
    const routeStore = useRouteStore();
    const { panel } = storeToRefs(routeStore);

    return {
      panel,
    };
  },
  props: {
    panels: Array<Panel>,
  },
};
</script>
<template>
  <q-header
    bordered
    class="q-ma-md bg-purple-2 text-purple rounded-borders shadow-5"
  >
    <q-tabs align="center" v-model="panel">
      <q-tab
        v-for="tab in panels"
        :name="tab.name"
        :icon="tab.icon"
        :key="tab.name"
      />
    </q-tabs>
  </q-header>
</template>
