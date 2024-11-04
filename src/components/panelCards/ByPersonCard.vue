<script setup lang="ts">
defineProps({
  route: String,
});
</script>

<template>
  <q-card class="q-pa-md">
    <div class="text-h5">By Person</div>
    <q-card-section>{{ route }}</q-card-section>
  </q-card>
</template>
