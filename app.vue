<script setup lang="ts">
  const store = useStore();
  if (window) {
    store.restoreInputData();
  }
</script>

<template>
  <NuxtPage />
</template>
