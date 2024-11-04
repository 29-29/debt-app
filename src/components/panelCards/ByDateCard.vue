<script lang="ts">
export default {
  props: {
    route: String,
  },
};
</script>

<template>
  <q-card class="q-pa-md">
    <div class="text-h5">By Date</div>
    <q-card-section>{{ route }}</q-card-section>
  </q-card>
</template>
