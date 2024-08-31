<script setup lang="ts">
  const store = useStore();
  if (window) {
    store.restoreInputData();
  }
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
