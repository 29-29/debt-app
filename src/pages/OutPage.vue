<script setup lang="ts">
import HeaderTab from 'src/components/HeaderTab.vue';
import TabPanels from 'src/components/TabPanels.vue';

const panels = [
  {
    name: 'summary',
    label: 'summary',
    icon: 'home',
  },
  {
    name: 'byPerson',
    label: 'person',
    icon: 'person',
  },
  {
    name: 'byDate',
    label: 'date',
    icon: 'calendar_month',
  },
];
</script>

<template>
  <HeaderTab :panels="panels" />
  <div class="q-mt-md">
    <TabPanels />
  </div>
</template>
