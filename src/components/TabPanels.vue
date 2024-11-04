<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouteStore } from 'src/stores/routeStore';

import SummaryCard from './panelCards/SummaryCard.vue';
import ByPersonCard from './panelCards/ByPersonCard.vue';
import ByDateCard from './panelCards/ByDateCard.vue';

const routeStore = useRouteStore();
const { route, panel } = storeToRefs(routeStore);

const panels = [
  {
    name: 'summary',
    component: SummaryCard,
  },
  {
    name: 'byPerson',
    component: ByPersonCard,
  },
  {
    name: 'byDate',
    component: ByDateCard,
  },
];
</script>

<template>
  <q-tab-panels v-model="panel" animated>
    <q-tab-panel v-for="panel in panels" :name="panel.name" :key="panel.name">
      <component :is="panel.component" :route="route" />
    </q-tab-panel>
  </q-tab-panels>
</template>
