<script lang="ts">
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<template>
  <q-toolbar class="bg-purple-6 text-white">
    <q-btn icon="arrow_back" @click="goBack" round flat />
    <q-toolbar-title>New Out...</q-toolbar-title>
  </q-toolbar>
</template>
