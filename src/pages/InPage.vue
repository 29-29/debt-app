<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteStore } from 'src/stores/routeStore';

import TabPanels from 'src/components/TabPanels.vue';

const routeStore = useRouteStore();
const { panel } = storeToRefs(routeStore);
</script>

<template>
  <q-header
    bordered
    class="q-ma-md bg-purple-2 text-purple rounded-borders shadow-5"
  >
    <q-tabs align="center" v-model="panel" inline-label>
      <q-tab name="summary" label="summary" icon="home" />
      <q-tab name="byPerson" label="by person" icon="person" />
      <q-tab name="byDate" label="by date" icon="calendar_month" />
    </q-tabs>
  </q-header>
  <div class="q-mt-md">
    <TabPanels />
  </div>
</template>
